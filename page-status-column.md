Create a new calculated column in Site Pages. Use the following formula:
```
=If((Version-INT(Version))<>0,"Draft","Published")
```
