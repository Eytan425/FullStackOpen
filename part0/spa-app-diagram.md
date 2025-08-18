'''mermaid
sequenceDiagram
participant client as Browser
participant backend as Server

    client->>backend: GET /exampleapp/spa
    activate backend
    backend-->>client: Deliver HTML page
    deactivate backend

    client->>backend: GET /exampleapp/styles.css
    activate backend
    backend-->>client: Return CSS file
    deactivate backend

    client->>backend: GET /exampleapp/notes
    activate backend
    backend-->>client: Send JavaScript
    deactivate backend

    client->>backend: GET /exampleapp/data.json
    activate backend
    backend-->>client: [{ "content": "SPA makes it dynamic", "date": "2025-08-18" }, ... ]
    deactivate backend

'''