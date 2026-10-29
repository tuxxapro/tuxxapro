# TUXXA | INFRAESTRUTURA EM MOVIMENTO

Site institucional e landing page da **TUXXA**, desenvolvido em **Angular 22 (Standalone + Signals)** e pronto para publicação no **GitHub Pages**.

---

## 🐧 Sobre a TUXXA

A **TUXXA** é uma consultoria de tecnologia especializada em:
- **Infraestrutura Cloud de Alta Performance:** AWS, Google Cloud e Microsoft Azure.
- **Kubernetes & Platform Engineering:** Orquestração de contêineres, service mesh e auto-scaling.
- **GitOps & Automação CI/CD:** GitHub Actions, GitLab CI e ArgoCD com zero downtime.
- **FinOps & Otimização de Custos em Nuvem:** Eficiência e redução inteligente de faturas.
- **Observabilidade & SRE:** Monitoramento proativo, Grafana, Prometheus e OpenTelemetry.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Angular 22](https://angular.dev/) (Standalone Components, Signals reativos)
- **Roteamento:** Hash Location (`/#/` e `/#/sobre`) para compatibilidade total com o GitHub Pages
- **Design System:** Vanilla CSS com a paleta oficial (Teal/Ciano `#00d2d3`, Laranja `#ff7b00` e Dark Slate)
- **Testes Unitários:** Vitest com TestBed
- **Automação:** GitHub Actions (`.github/workflows/deploy.yml`)

---

## 💻 Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor local
npm start
# Acesse no navegador: http://localhost:4200

# Executar testes unitários
npm test -- --watch=false

# Compilar para o GitHub Pages
npm run build:pages
```

---

## 🌐 Publicação no GitHub Pages

1. No repositório no GitHub, vá em **Settings** > **Pages**.
2. Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
3. Faça o push da branch `main`:
   ```bash
   git push origin main
   ```
4. O GitHub Actions executará os testes, compilará o projeto e publicará o site automaticamente.
