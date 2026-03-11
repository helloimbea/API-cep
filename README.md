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
É o componente central do app, no arquivo.ts criamos a função responsável pela busca e armazenamento das informações nas variáveis criadas. Já no arquivo.html exibimos as informações e recebemos o cep digitado no input através do _ngModel_.  
O cep-input.ts possui uma função principal: `getCep()`, responsável por chamar a função `buscaCep()` dentro do Service do CEP, enviando como parâmetro o cep digitado pelo usuário. Após isso, a função recebe os dados da API através do subscribe e armazena eles na variável ‘endereco’, criada para armazenar dados no formato da interface. Guardamos separadamente o código do IBGE recebido da API do cep e inserimos ele como parâmetro na url da API do IGBE, que fará a busca da malha geográfica, armazenando-a na variável malhaUrl.  
O arquivo cep-input.html possui a seguinte função: recebe o cep digitado pelo usuário no input, através do ngModel e assim que o botão for clicado a função `getCep()` é executada. Se o cep digitado for válido as informações da API serão armazendas. Para exibir os dados utilizamos o `@if` com a variável ‘endereco’ como condição, em caso de problemas usamos `@elseif(erro)` para exibir uma mensagem de erro e um `@else` para um texto standby. 
- **Map:**  
Esse componente é responsável por carregar a malha geográfica na tela.
**main-page**
O main-page é o pai que vai juntar e carregar o componente cep-input e o map na tela.
### Services
Cada API tem um service com um método que busca informações da url. O service do cep busca a url com o cep que foi digitado. O service do map recebe o código IBGE como parâmetro para usar na url e buscar a malha geográfica do município.

