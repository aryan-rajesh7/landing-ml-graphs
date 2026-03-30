# Traffic Congestion ML Pipeline

This repository contains the isolated machine learning pipeline for forecasting urban traffic congestion. It generates high-fidelity synthetic time-series data to train and evaluate a dual-model architecture prior to live deployment.

## Overview

The pipeline solves two distinct modeling problems:
1. **Time-Series Forecasting:** A PyTorch Long Short-Term Memory (LSTM) network identifies temporal congestion buildup over rolling windows.
2. **Feature Importance:** An XGBoost Regressor evaluates non-linear tabular features (hour, day of week, lag averages) to establish baseline congestion probabilities.

## Tech Stack
* **Deep Learning:** PyTorch (LSTM)
* **Machine Learning:** XGBoost, Scikit-Learn (MinMaxScaler)
* **Data Engineering:** Pandas, NumPy
* **Visualization:** Matplotlib

## Directory Structure
The scripts are configured to output models and visualizations directly into a Next.js `public` directory for seamless frontend integration.

```text
ml/
├── export/
├── models/
│   ├── lstm.py
│   └── xgboost_model.py
├── plots/              # Auto-generated visualization PNGs
├── saved_models/       # Exported .pt and .pkl model weights
└── train.py            # Master execution script
