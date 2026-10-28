# [Why almost all ML models for medicine are wrong-and what we need for evidence-based medical AI](https://www.sciencedirect.com/science/article/pii/S1386505626002789?via%3Dihub)
## Terms

## Concerns
- many of the models being published are not validated/verified well and do not perform as stated
	- This is based on many assumptions in the design process for these models
### Issues with model training:
- Unreliable ground truths
- inappropriate decision thresholds
- assessment metrics are inadequate
- validation datasets do not represent real world use cases
#### Ground Truth Concerns
Specifically in medicine, diagnostic categories are not cut and dry categories and there is often blurring/overlap. However ML training assumptions are being made that the labels used are objective and accurate/correct, and then used for predictions. These assumptions on accuracy supremacy lead to noise in the dataset and impact the application of the model.
#### Threshold optimization
Most ML models optimize global metrics such as **AUROC**, assuming all decision thresholds are equally important. In medicine this assumption is incorrect:
- different diseases have different acceptable false positive / false negative tradeoffs
- decision thresholds depend on clinical context and risk
- threshold selection therefore has ethical and clinical implications
#### Assessment metrics

Many commonly reported metrics are unstable or misleading. Problems:
- **accuracy** is inflated by class imbalance
- **PPV** changes with disease prevalence
- **F1**, **MCC**, sensitivity and specificity depend on the chosen threshold
- many papers report metrics using an arbitrary threshold of 0.5
Thus recommendations include:
- report calibration
- report clinical utility (net benefit)
- evaluate robustness on heterogeneous and out-of-distribution (OOD) data
- evaluate performance across clinically relevant thresholds
#### Calibration
A model should produce probabilities that match real-world outcomes. For example:
- if the model predicts 80% probability for 100 patients, then roughly 80 should actually have the condition.
Calibration should be evaluated around clinically important decision thresholds, not only globally.
#### Performance uncertainty
Many papers report only point estimates for metrics. The problem is(are):
- evaluation datasets are often small
- performance estimates have statistical uncertainty
- small differences between models may not be meaningful
To address these concerns, researchers can use report confidence/credible intervals and use statistical tests when comparing models
#### External validation
Many studies only evaluate on held-out splits from the same dataset. But this does not show whether the model generalizes

External validation should use:
- independent hospitals
- different populations
- different collection conditions
- ideally prospective datasets
#### Temporal validation

Clinical data changes over time:
- disease prevalence
- diagnostic criteria    
- laboratory equipment
- clinical practice
- patient populations
Models should therefore include:
- temporal validation
- recalibration
- post-deployment monitoring
- MLOps fo continuous evaluation
## Recommendations: Real-world data
The paper argues that real-world clinical data is inherently noisy. Rather than assuming perfect labels, ML methods should support:
- noisy labels
- soft/probabilistic labels
- annotator disagreement
- dataset shift
- uncertainty estimation
- OOD detection
- robust learning
