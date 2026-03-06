# MyAdmin

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)

**MyAdmin** is a lightweight, Dockerized development environment inspired by **XAMPP**. It provides a ready-to-use **MySQL 8** instance with the popular **phpMyAdmin** interface for easy graphical database management.

Perfect for developers who need a quick, isolated database backend without the bloat of a full server suite.

---

## 🚀 Features

- **🛡️ MySQL 8 (Debian-based)**: Reliable and performant database engine.
- **🖥️ phpMyAdmin**: The industry-standard web interface for MySQL administration.
- **⚡ One-Command Setup**: Get up and running in seconds using Docker Compose.
- **🔄 Local Persistence**: Database data is persisted across restarts via Docker volumes.

---

## 🛠️ Getting Started

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed on your machine.
- [Docker Compose](https://docs.docker.com/compose/install/) (included with Docker Desktop).

### Installation & Run

1.  **Clone this repository**:
    ```bash
    git clone https://github.com/tarsislimadev/xampp.git
    cd xampp
    ```

2.  **Start the services**:
    ```bash
    docker compose up -d
    ```

---

## 🔗 Accessing Services

Once the containers are running, you can access the services using the details below:

| Service | Address | Local Port |
| :--- | :--- | :--- |
| **phpMyAdmin** | [http://localhost:8080](http://localhost:8080) | `8080` |
| **MySQL Server** | `localhost` | `3306` |

### 🔐 Default Credentials

| Field | Value |
| :--- | :--- |
| **PMA_USER** | `root` |
| **PMA_PASSWORD** | `mysql` |
| **MySQL Root Password** | `mysql` |

---

## ⚙️ Configuration

To modify the default settings (like passwords or ports), simply edit the `docker-compose.yaml` file:

```yaml
# Example: Changing the MySQL Root Password
environment:
  - 'MYSQL_ROOT_PASSWORD=your_secure_password'
```

---

## 📄 License

This project is open-source and available under the [MIT License](./LICENSE).
