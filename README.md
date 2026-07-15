# 📍 BuscaCEP

A web application built with **Angular** that allows users to search for a Brazilian ZIP code (CEP) and display both the address information and the municipality's geographic boundary.

This project was developed during the **Front-end classes at Bosch**, taught by **Marcelo Petri**, by **Beatriz Heimann** and **Ana Julya**.

---

## ✨ Features

- Search any Brazilian CEP
- Display address information using the ViaCEP API
- Display the municipality's geographic boundary using the IBGE API
- Responsive and intuitive interface
- Component-based architecture with Angular

---

## 📸 Preview

![BuscaCEP Screenshot](img/buscacep.jpeg)

---

## 🛠 Technologies

- Angular
- TypeScript
- HTML5
- CSS3
- Bootstrap
- RxJS
- ViaCEP API
- IBGE Geographic Boundaries API

---

## 🌐 APIs Used

### ViaCEP

Retrieves address information from a Brazilian ZIP code.

https://viacep.com.br/

### IBGE Geographic Boundaries API

Retrieves the municipality boundary using the IBGE code returned by ViaCEP.

https://servicodados.ibge.gov.br/api/docs/malhas?versao=4

---

## 🏗 Architecture

The application is divided into three main components.

### CEP Input

Responsible for:

- Receiving the CEP entered by the user
- Requesting address information from the ViaCEP API
- Obtaining the municipality IBGE code
- Sending the geographic boundary URL to the parent component

### Main Page

Acts as the parent component.

Its responsibilities are:

- Managing communication between components
- Receiving the geographic boundary URL
- Passing the URL to the map component

### Map (Malha)

Responsible for displaying the municipality boundary image returned by the IBGE API.

---

## 🚀 Running the Project

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/BuscaCep.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
ng serve
```

Open your browser at:

```
http://localhost:4200
```

---

## 📚 What I Learned

This project helped me practice:

- Consuming REST APIs with Angular
- Using Angular Services
- Working with Observables and RxJS
- Parent-child communication using `@Input()` and `@Output()`
- Component architecture
- API integration
- Data binding
- TypeScript interfaces

---

## 👨‍💻 Authors

- Beatriz Heimann
- Ana Julya

---

## 💡 Project Goal

The main goal of this project was to learn how to consume multiple APIs within an Angular application.

The application demonstrates how data retrieved from one API (ViaCEP) can be reused to perform a second request to another API (IBGE), reinforcing concepts such as API integration, component communication, and service-based architecture.

# 📖 Detailed Documentation

<details>
<summary>Click to expand the detailed implementation</summary>

## Component Architecture

### CEP Input

The **CEP Input** component is the core of the application. It receives the ZIP code entered by the user, requests the address information from the ViaCEP API, and prepares the data to be displayed.

The interface (`cep-input.html`) contains an input field bound to the `cep` variable using `ngModel`. When the search button is clicked, the `getCep()` method is executed.

In `cep-input.ts`, the `getCep()` method calls `buscarCep()` from `CepService`, passing the ZIP code entered by the user. The API response is handled through `subscribe()`, and the returned data is stored in the `endereco` variable, which follows the `CepInterface` structure.

The response also includes the municipality's **IBGE code**, which is later used to retrieve the geographic boundary image.

Conditional rendering is used to display the address information, loading state, or error messages depending on the request result.

---

### Map Component

The **Map** component is responsible for displaying the municipality's geographic boundary.

After the address is retrieved, the **IBGE code** is sent to `MalhaService`, which generates the URL for the municipality boundary image using the IBGE API.

The resulting URL is emitted from the **CEP Input** component using `@Output()` and received by the parent component.

The parent then passes this URL to the **Map** component through property binding:

```html
<app-malha [malhaUrl]="malhaUrl"></app-malha>
```

Inside `malha.ts`, the value is received using `@Input()`, and `malha.html` displays the image by binding the URL to the `src` attribute of an `<img>` element.

---

### Main Page

The **Main Page** acts as the parent component of the application.

Its primary responsibility is to coordinate communication between the **CEP Input** and **Map** components.

When the CEP Input component generates the geographic boundary URL, it emits the value using `@Output()`. The Main Page stores this value and passes it to the Map component through property binding, allowing the correct geographic boundary to be displayed.

This architecture keeps the components independent while enabling efficient data sharing through Angular's parent-child communication.

---

## Final Considerations

This project provided valuable experience in consuming REST APIs with Angular and integrating multiple services within the same application.

One of the main learning points was using the data returned from one API (ViaCEP) to perform a second request to another API (IBGE), creating a dependency between the two requests.

The project also reinforced Angular concepts such as **Services**, **Observables**, `@Input()`, `@Output()`, and parent-child component communication.

Although integrating the APIs through services was the most challenging part, choosing simple APIs allowed us to focus on understanding the development process and building a well-structured application.

</details>
