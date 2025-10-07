# Decision record

## 001: module approach

**Project Approach Summary**

* **Modular Architecture:**
    * The project is structured with a modular design, separating the library (`sfai_library_foo`) from its producer (`sfai-web-library-producer`) and consumer (`sfai-web-library-consumer`).
    * This promotes reusability and maintainability.
* **Independent Library Configuration:**
    * The library (`sfai_library_foo`) maintains its own Webpack and `tsconfig.json` configurations.
    * This ensures the library's independence and facilitates its potential reuse in other projects.
* **External Sub-Module Dependencies:**
    * Sub-modules (`sfai_library_mjs`, `sfai_library_nodejs`, `sfai_library_stub`) are treated as external dependencies for the library.
    * Alias configurations in `tsconfig.json` and Webpack are used for local development.
    * Webpack externals configuration are used for packaging the library.
* **Alias-Based Imports:**
    * Alias (`@sfai-library-*`) are used for importing sub-modules, enhancing code readability and flexibility.
* **Clear Separation of Concerns:**
    * The producer module focuses on building and packaging the library, while the consumer module focuses on using it.
    * Each module has it's own package.json, to manage it's own dependencies.

**Key Decisions and Guidelines:**

* Maintain separate configurations for the library to ensure its independence.
* Treat sub-modules as external dependencies during packaging.
* Use aliases for local development imports.
* Keep the project as modular as possible.

This approach prioritizes modularity, reusability, and maintainability, allowing for a scalable and robust project structure.

## 002: **Decision: Public Interface Layer for Library (`public/index.tsx`)**

* **Abstraction:**
  * Hides internal complexity, provides clean API.
* **Maintainability:**
  * Separates interface from implementation.
* **Control:**
  * Dictates what's exposed, allows future expansion.
* **Consistency:**
  * Single import point, ensures API uniformity.
* **Refactoring:**
  * Allows refactoring the implementation without breaking the api.
