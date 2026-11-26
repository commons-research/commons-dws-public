# [PMML Association Rules](dmg.org/pmml/v4-4-1/AssociationRules.html)
**Association Rule Model** represents rules where some set of items is associated to antoher set of items. Good for comparing when two sets of items occur together and determining relationships. This can be done where each category field is an item, their example:

| Rownum | transactionid | item    |
| ------ | ------------- | ------- |
| 1      | 01            | Water   |
| 2      | 01            | Bread   |
| 3      | 02            | Cracker |
| 4      | 02            | Coke    |
| 5      | 02            | Bread   |
can also be used to build on t/f data:

| rownum | water | cracker | coke | bread | area  | day     | day=weekday |
| ------ | ----- | ------- | ---- | ----- | ----- | ------- | ----------- |
| 1      | false | false   | true | true  | urban | modnay  | true        |
| 2      | true  | false   | true | false | rural | tuesday | true        |
| 3      | false | true    | true | true  | urban | sunday  | false       |
(and so on)
In the above example water, cracker, coke, bread, day=weekday, are all boolean values. Area, day are categorical fields. 

The association rule model has 4 parts:
1) Model attributes
2) Items
3) ItemSets
4) AssocationRules
An associationmodel can contain any number of itemsets and associationrules. itemsets must be listed before the rules. 

**support:** relative support of the ItemSet: *support(set)=(number of transactions containing the set)/(total number of transcations)*

Decscription of attributes in an AssociationRule and hold true for all attributees in the rule:
- **antecedent**: id value of the itemset that is the antecedent of the rule, represented with A
- **consequent**: id value of the itemset that is the consequent of the rule, represented with a C
- **support**: supprot of the rule: $support(A->C)=support(A+C)$ , or the transaction frequency where A contains C
- **confidence**: Confidence rule: $confidence(A->C)=support(A+C)/support(A)$ 
- **lift**: Measure of interestingness of a rule. Values greater than 1.0 indicate transactions containing A tend to contain C more often than transactions that do not contain A. $lift(A->C)=confidence(A->C)/support(C)$ 
- **leverage**: Difference between the observed frequency of A+C and the frequency that would be expected if A and C were independent. $leverage(A->C)=support(A->C)-support(A)*support(C)$ 
- **affinity**: aka Jaccard Similarity, measure of transactions that contain both the antecedent and the consequent (intersect) compared to those that contain the antecedent or the consequent (union): $affinity(A->C)=support(A+C)/[support(A)+support(C)-support(A+C)]$ 
- **id**: ID for uniquely identifying association rule.
![Association Rules Statistics](vault/assets/images/AR_Statistics.png)
diargram of these rules