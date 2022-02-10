Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.

Specificity :- 

The amount of specificity a selector has is measured using four different values (or components), which can be thought of as thousands, hundreds, tens and ones — four single digits in four columns:

1000 - Inline/Style Tag
Hundreds - One for each ID Selector
Tens - One for each class selector, attribute selector, pseudo-class contained inside the overall selector.
Ones - One for each element selector, pseudo-element contained inside the overall selector.

Note: Universal selector (*), combinators (+, >, ~, ' ') and negation pseudo-class (:not) have no effect on specificity.

| Selector                                | Thousands | Hundreds | Tens | Ones | Total |
|-----------------------------------------|-----------|----------|------|------|-------|
| h1                                      | 0         | 0        | 0    | 1    | 0001  |
| h1 + p                                  | 0         | 0        | 0    | 2    | 0002  |
| h1 + p::first-letter                    | 0         | 0        | 0    | 3    | 0003  |
| li > a[href*="en-US"] > .inline-warning | 0         | 0        | 2    | 2    | 0022  |
| .class1                                 | 0         | 0        | 1    | 0    | 0010  |
| ul.class1                               | 0         | 0        | 1    | 1    | 0011  |
| #id1                                    | 0         | 1        | 0    | 0    | 0100  |
| style                                   | 1         | 0        | 0    | 0    | 1000  |