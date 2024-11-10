# 🐱‍👤 Pokémon Angular Application

Esta aplicación  sirve para gestionar y visualizar datos de Pokémon, incluyendo la funcionalidad de marcar un Pokémon como favorito. Se ha construido utilizando diversas técnicas y patrones de Angular, tales como NgRx para el manejo del estado, pipes personalizados, suscripciones, y más.

## ✨ Características Principales

- **Visualización de Pokémon**: Muestra una lista de Pokémon con la capacidad de marcar uno como favorito.
- **Funcionalidad de Favorito**: Permite a los usuarios seleccionar un único Pokémon como favorito, y guarda esta selección de manera persistente en `localStorage` utilizando NgRx.
- **Paginación y Filtrado**: Uso de Angular Material para paginar y filtrar los datos de la lista de Pokémon.
- **Transformación de Datos**: Uso de pipes personalizados para transformar la visualización de datos.

## 🛠 Tecnologías y Herramientas Usadas

- **Angular 14**: Framework principal para el desarrollo de la aplicación.
- **Angular Material**: Utilizado para componentes de UI, como tablas y paginadores.
- **NgRx**: Manejo de estado global y persistente de la funcionalidad de favorito.
- **TypeScript**: Lenguaje principal de desarrollo.
- **Local Storage**: Persistencia del estado de favorito utilizando un `metaReducer` de NgRx.

## 🚀 Configuración del Proyecto

Para instalar y ejecutar el proyecto, sigue los pasos a continuación:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/pokemon-angular-app.git
   cd pokemon-angular-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el proyecto:
   ```bash
   ng serve
   ```

4. Abre el navegador en `http://localhost:4200` para ver la aplicación en funcionamiento.

## 🔍 Técnicas Utilizadas

### 1. **NgRx para Manejo de Estado Global**

   - Se ha usado NgRx Store para gestionar el estado de la aplicación, en particular la funcionalidad de marcar un Pokémon como favorito.
   - **Acciones**: Definidas para `setFavorite` y `clearFavorite`.
   - **Reducers**: Se utiliza un reducer para actualizar el estado de favoritos en respuesta a las acciones.
   - **MetaReducers**: Se configura un `metaReducer` para sincronizar el estado de favoritos con `localStorage`, permitiendo la persistencia entre sesiones.
   - **Selectores**: El componente se suscribe al estado de favoritos utilizando selectores de NgRx para obtener el valor actual.

### 2. **Persistencia con `localStorage`**

   - Se utiliza `localStorage` para almacenar el estado de favoritos. Esto se logra mediante el `metaReducer`, que sincroniza automáticamente el estado de NgRx con `localStorage`.
   - Se implementa la función `rehydrateState` para cargar el favorito almacenado al iniciar la aplicación.

### 3. **Pipes Personalizados**

   - **capitalizeFirst**: Un pipe personalizado que transforma la primera letra de un nombre de Pokémon en mayúscula. Este pipe toma una cadena y devuelve el valor con la primera letra en mayúscula.
   - Uso en plantillas: `{{ pokemon.name | capitalizeFirst }}`

### 4. **Angular Material**

   - Se utiliza Angular Material para los componentes de UI, incluyendo `MatTable`, `MatPaginator` y `MatFormField`.
   - La tabla de Pokémon está paginada y tiene un campo de búsqueda para filtrar los datos, haciendo que la aplicación sea fácil de usar y navegar.

### 5. **Suscripciones con Observables**

   - Se usa el patrón de suscripción para acceder al estado de favoritos desde NgRx, permitiendo que los componentes reaccionen a cambios en el estado.
   - Se usa el operador `first` para obtener el valor del favorito una vez sin mantener una suscripción continua.
   - **Desuscripción automática**: Con NgRx, la suscripción a `Store.select` en los componentes se maneja automáticamente, por lo que no se requieren desuscripciones manuales en la mayoría de los casos.

### 6. **Manejo de Eventos**

   - Se utiliza la detección de clics para alternar el estado de favorito en la lista de Pokémon.
   - Los eventos de clic despachan acciones de NgRx (`setFavorite` y `clearFavorite`) para actualizar el estado de la aplicación.



## 🚀 Posibles Mejoras

- **Implementar Búsqueda Avanzada**: Mejorar la funcionalidad de búsqueda para permitir filtrados más avanzados de Pokémon.
- **Lista de Favoritos**: Extender la funcionalidad de favoritos para permitir múltiples Pokémon favoritos.
- **Lazy Loading de Módulos**: Optimizar el rendimiento implementando carga diferida para módulos.

