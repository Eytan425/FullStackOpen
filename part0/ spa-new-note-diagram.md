'''mermaid

sequenceDiagram
participant client as Browser
participant backend as Server

    client->>backend: GET /exampleapp/spa
    activate backend
    backend-->>client: Serve HTML page
    deactivate backend

    client->>backend: GET /exampleapp/styles.css
    activate backend
    backend-->>client: Provide CSS stylesheet
    deactivate backend

    client->>backend: GET /exampleapp/notes
    activate backend
    backend-->>client: Load JavaScript file
    deactivate backend

    client->>backend: GET /exampleapp/data.json
    activate backend
    backend-->>client: JSON payload [{ "content": "SPA example", "date": "2025-08-18" }, ...]
    deactivate backend

    client->>backend: POST /exampleapp/new_note_spa
    activate backend
    backend-->>client: Save note (no full reload)
    deactivate backend
'''