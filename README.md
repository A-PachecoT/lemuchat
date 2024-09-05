# Chatbot Web Application

This project is a web-based chatbot application using FastAPI and LangChain for the backend, and Angular for the frontend.

## Project Structure

```
project/
├── backend/
│ ├── app/
│ │ ├── init.py
│ │ ├── main.py
│ │ ├── api/
│ │ │ ├── init.py
│ │ │ └── chat.py
│ │ ├── core/
│ │ │ ├── init.py
│ │ │ └── config.py
│ │ └── services/
│ │ ├── init.py
│ │ └── chatbot.py
│ ├── requirements.txt
│ └── .env
└── frontend/
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ └── chat/
│ │ │ ├── chat.component.ts
│ │ │ ├── chat.component.html
│ │ │ └── chat.component.css
│ │ ├── services/
│ │ │ └── chat.service.ts
│ │ ├── app.component.ts
│ │ ├── app.component.html
│ │ └── app.module.ts
│ ├── index.html
│ └── styles.css
├── angular.json
└── package.json
```

## Backend (FastAPI + LangChain)

The backend is built with FastAPI and uses LangChain to interact with the OpenAI API.

### Setup

1. Navigate to the `backend` directory.
2. Create a virtual environment: `python -m venv venv`
3. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Create a `.env` file in the `backend` directory and add your OpenAI API key:

```

OPENAI_API_KEY=your_openai_api_key_here

```

### Running the Backend

From the `backend` directory, run:

```

uvicorn main:app --reload

```

## Frontend (Angular)

The frontend is built with Angular.

### Setup

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`

### Running the Frontend

From the `frontend` directory, run:

```

ng serve

```

The application will be available at `http://localhost:4200`.

## Usage

1. Start both the backend and frontend servers.
2. Open a web browser and go to `http://localhost:4200`.
3. You should see a chat interface where you can interact with the chatbot.

## API Endpoints

- `POST /chat`: Send a message to the chatbot and receive a response.

## Technologies Used

- Backend:
  - FastAPI
  - LangChain
  - OpenAI API
- Frontend:
  - Angular
  - RxJS

## Future Improvements

- Add user authentication
- Implement conversation history persistence
- Enhance the chat interface with more features (e.g., message timestamps, user avatars)
- Add support for multiple language models
- Implement error handling and input validation

```

```
