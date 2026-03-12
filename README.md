# BuscaCep
BuscaCep é uma atividade de API's no Angular desenvolvida na Bosch durante as aulas de front-end com o professor Marcelo Petri.
## Proposta
Nossa proposta foi usar uma API de cep para encontrar as informações do cep que o usuário digitar e mostrar na tela, além de usar o código do IBGE para puxar a malha geográfica da cidade a partir da API de malhas geográficas do IBGE.  
  
![print buscacep](../img/buscacep.jpeg)
## Desenvolvimento
Para esse projeto escolhemos 2 API’s:   
**Via cep** `https://viacep.com.br/ws/01001000/json/`  
**IBGE malhas geográficas** `https://servicodados.ibge.gov.br/api/docs/malhas?versao=4`
### Componentes
- **Cep-input:**  
O componente **cep-input** é o componente central da aplicação, responsável por receber o CEP digitado pelo usuário, buscar as informações do endereço na API e preparar os dados que serão exibidos na interface.  
O arquivo **cep-input.html** é responsável pela interface do componente. Nele, o usuário pode digitar o CEP em um campo de input que está ligado à variável cep através do _**ngModel**_. Quando o botão de busca é clicado, a função `getCep()` é executada. 
No arquivo **cep-input.ts** estão definidas as variáveis e a função responsável por realizar a busca do CEP. A principal função do componente é `getCep()`, que chama o método `buscarCep()` presente no **CepService**, enviando como parâmetro o CEP digitado pelo usuário.  
Quando a requisição é realizada, a função recebe a resposta da API através do `subscribe()`. Os dados retornados são então armazenados na variável endereco, que segue o formato definido pela interface **CepInterface**. Além das informações do endereço, a resposta da API também contém o código IBGE do município, permitindo que o componente responsável pelo mapa possa carregar a imagem da malha.  
Para exibir os resultados na tela, são utilizadas diretivas condicionais. Quando o CEP é válido e os dados são retornados corretamente, as informações do endereço armazenadas na variável endereco são exibidas. Caso ocorra algum erro, é mostrada uma mensagem de erro através da variável erro. Durante o tempo de resposta da requisição, também pode ser exibida uma mensagem de loading, indicando que a busca ainda está em andamento.
- **Map:**  
Esse componente é responsável por exibir a malha geográfica do município na tela.  
Primeiro, o componente **cep-input** faz a busca do CEP usando o **cep.service**. Quando a API retorna os dados do endereço, ele pega o **código IBGE** do cep.  
Esse código IBGE é enviado para o **malha.service**, que monta a URL da malha geográfica do município utilizando o código. O service então retorna essa URL para o componente **cep-input**.  
Depois disso, o **cep-input** usa um `@Output()` para enviar essa URL para o componente pai, que é o **main-page**.  
O **main-page** recebe essa URL e a passa para o componente map através do HTML usando data binding: `<app-map [malhaUrl]="malhaUrl"></app-map>`  
No componente **map.ts**, essa variável é recebida usando` @Input()`.
Por fim, o map.html usa essa URL como fonte da imagem: `<img [src]="malhaUrl" style="width:400px">`  
Esse binding faz com que a imagem da malha geográfica do município seja carregada e exibida na tela.


**main-page**
O main-page é o pai que vai juntar e carregar o componente cep-input e o map na tela.
### Services
Cada API tem um service com um método que busca informações da url. O service do cep busca a url com o cep que foi digitado. O service do map recebe o código IBGE como parâmetro para usar na url e buscar a malha geográfica do município.

