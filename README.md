# Landing Page & ML Pipeline

A unified repository containing the PyTorch/XGBoost machine learning training pipeline for urban traffic forecasting, alongside the Next.js landing page that showcases its architectural deep-dive and visual analytics.

## Overview

This repository is split into two core components that work together to showcase the AI Traffic Optimizer project:
1. **The Machine Learning Pipeline (`public/ml/`):** Isolated Python scripts that generate high-fidelity synthetic time-series data, train a PyTorch LSTM and an XGBoost Regressor, and output static analytical graphs (`.png`) and model weights.
2. **The Showcase Landing Page (`app/page.tsx`):** A responsive Next.js frontend built with React and Tailwind CSS. It serves as a comprehensive portfolio piece, detailing the full-stack system architecture and displaying the dynamically generated ML visualizations directly from the `public` directory.

## Tech Stack

**Frontend (Landing Page)**
* Framework: Next.js / React
* Styling: CSS-in-JS / Tailwind CSS
* Deployment Target: Vercel

**Machine Learning (Pipeline)**
* Deep Learning: PyTorch (LSTM)
* Tabular Modeling: XGBoost
* Data Engineering: Pandas, NumPy
* Data Processing: Scikit-Learn (MinMaxScaler)
* Visualization: Matplotlib

## Directory Structure

```text
landing-ml-graphs/
├── app/
│   ├── layout.tsx
│   └── page.tsx                # Main Next.js landing page code
├── public/
│   └── ml/                     # ML Pipeline & Assets
│       ├── models/
│       │   ├── lstm.py
│       │   └── xgboost_model.py
│       ├── plots/              # Auto-generated visualization PNGs for the UI
│       ├── saved_models/       # Exported .pt and .pkl model weights
│       └── train.py            # Master ML execution script
├── package.json
└── README.md
