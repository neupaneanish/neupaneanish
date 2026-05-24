## Hi, I'm Anish Neupane 👋

### Backend & Systems Engineer | Go • gRPC • Distributed Systems

I build backend systems in Go with a focus on correctness, observability, and simple service boundaries. Most of my work revolves around gRPC-based microservices and decoupled system design.

---

## 🚀 Projects I Work With

- 🖥️ **[Portfolio API](https://github.com/neupaneanish/api)** Main backend service built in Go + gRPC. Handles core service logic, security, and observability.

- 📜 **[gRPC Protobuf](https://github.com/neupaneanish/protobuf)** Shared contract definitions used across backend, mobile, and services.

- 🗄️ **[Database Layer](https://github.com/neupaneanish/database)** PostgreSQL schema definitions and migrations, kept separate so services stay independent.

- 📱 **[Android Client](https://github.com/neupaneanish/android)** Jetpack Compose app that talks directly to backend via generated gRPC stubs.

---

## ⚙️ How I Design Systems

- I keep service contracts (protobuf) separate so backend and clients don’t drift out of sync.
- I avoid ORMs and use `sqlc` so SQL stays explicit and compile-time safe.
- I prefer integration tests over mocks, using `testcontainers-go` with real Postgres/Valkey instances.
- I rely on OpenTelemetry traces to understand how requests move across services instead of guessing from logs.

---

## 🛠️ Stack

Go, gRPC, Kotlin, SQL, PostgreSQL, Valkey, Redis  
Docker, Linux, GitHub Actions, GitLab CI/CD  
OpenTelemetry, SigNoz

---

## 💼 About Me

- Focused on backend systems and distributed service design
- Prefer working on infrastructure-level problems rather than UI-heavy work
- Open to backend / platform roles (remote or US hybrid)
- F-1 CPT/OPT eligible

---

## 📬 Contact

[Website](https://neupaneanish.com.np) | [LinkedIn](https://linkedin.com/in/neupaneanish) | [GitHub](https://github.com/neupaneanish) | [GitLab](https://gitlab.com/neupaneanish)

---

## ⚖️ Note

These repositories are written for engineering evaluation and architecture demonstration. They are simplified versions of production-style backend systems.