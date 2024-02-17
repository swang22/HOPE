
```@meta
CurrentModule = HOPE
```

# PCM Inputs Explanation

The input files for the **HOPE** model could be one big .XLSX file or multiple .csv files. If you use the XLSX file, each spreadsheet in the file needs to be prepared based on the input instructions below and the spreadsheet names should be carefully checked. If you use the csv files, each csv file will represent one spreadsheet from the XLSX file. If both XLSX file and csv files are provided, the XLSX files will be used. 

## gendata

This is input dataset for generators. 

---
|**Column Name** | **Description**|
| :--------------| :-----------|
|Pmax (MW) |Maximum generation capacity/Nameplate generation capacity of a generator|
|Pmin (MW) |Minimum generation capacity of the generator|
|Zone |The zone that the generator is belonging to| 
|Type |The type of technology of the generator|
|Cost ($/MWh) |Operating cost for the generator per megawatt hour|
|EF |The CO2 emission factor for the generator, in tons per megawatt hour|
|CC |The capacity credit for the generator. It is the fraction/percentage of the installed/nameplate capacity of a generator which can be relied upon at a given time|
|FOR | Forced outage rate for the generator, in percentage|
|RM_SPIN | Reserve margin (spinning reserve) for the generator, in percentage|
|RU | Ramp up rate for the generator|
|RD | Ramp down rate for the generator|
---


## storagedata

This is input dataset for energy storage (e.g., battery storage, pumped hydro storage). 

---
|**Column Name** | **Description**|
| :------------ | :-----------|
|Zone |The zone that the storage is belonging to|
|Type |Type of technology the storage adopts|
|Capacity (MWh) |Maximun energy capacity of the storage in megawatt hour|
|Max Power (MW) |Maximum capacity of the storage in megawatt|
|Charging efficiency |Ratio of how much energy is transferred from the charger to the storage unit|
|Discharging efficiency |Ratio of how much energy is transferred from the storage unit to the charger|
|Cost ($/MWh) |Operating cost for the storage per megawatt hour|
|EF |The CO2 emission factor for the storage, in tons per megawatt hour|
|CC |The capacity credit for the storage. It is the fraction/percentage of the installed/nameplate capacity of a storage which can be relied upon at a given time|
|Charging Rate ||
|Discharging Rate ||
---


## solar_timeseries_regional

This is the input dataset for rescaled annual hourly solar PV generation profile in each zone. Each zone has 8760 data points.

---
|**Column Name** | **Description**|
| :------------ | :-----------|
|Month | Month of the year, ranging from 1 to 12|
|Day | Day of the month, ranging from 1 to 31|
|Period | Hour of the day, ranging from 1 to 24|
|Zone name 1 | Rescaled solar power generation data in zone 1 on a specific period, day, and month|
|Zone name 2 | Rescaled solar power generation data in zone 2 on a specific period, day, and month|
|... |...|
---

## wind_timeseries_regional

This is the input dataset for rescaled annual hourly wind generation profile in each zone. Each zone has 8760 data points.

---
|**Column Name** | **Description**|
| :------------ | :-----------|
|Month | Month of the year, ranging from 1 to 12|
|Day | Day of the month, ranging from 1 to 31|
|Period | Hour of the day, ranging from 1 to 24|
|Zone name 1 | Rescaled wind power generation data in zone 1 on a specific period, day, and month|
|Zone name 2 | Rescaled wind power generation data in zone 2 on a specific period, day, and month|
|... |...|
---

## linedata

This is the input dataset for transmission lines, indicating transmission capacity limit for each cross zone transmission line.

---
|**Column Name** | **Description**|
| :------------ | :-----------|
|From_zone | Starting point of a cross zone transmission line|
|From_zone | Ending point of a cross zone transmission line|
|Capacity (MW) | Transmission capacity limit for the transmission line|
---


## zonedata

This is the input dataset for zone relevant information inlcuding demand, mapping with state, etc.

---
|**Column Name** | **Description**|
| :------------ | :-----------|
|Zone_id | Name of each zone, should be unique|
|Demand (MW) | Peak demand of the zone in MW|
|State | The state that the zone is belonging to|
---

## load_timeseries_regional

This is the input dataset for rescaled annual hourly load profile in each zone.

---
|**Column Name** | **Description**|
| :------------ | :-----------|
|Month | Month of the year, ranging from 1 to 12|
|Day | Day of the month, ranging from 1 to 31|
|Period | Hour of the day, ranging from 1 to 24|
|Zone name 1 | Rescaled load data in zone 1 on a specific period, day, and month|
|Zone name 2 | Rescaled load data in zone 2 on a specific period, day, and month|
|... |...|
|NI | Net load import on a specific period, day, and month|
---

## carbonpolicies

This is the input dataset for carbon policies.

---
|**Column Name** | **Description**|
| :------------ | :-----------|
|State | Name of the state|
|Time Period | Time periods for carbon allowance, can be yearly or quarterly, set by users|
|Allowance (tons) | Carbon emission allowance for each state in tons|
---

## rpspolicies

This is the input dataset for renewable portfolio standard policies. It defines renewable credits trading relationship between different states (i.e., the states must be neighboring states) and the renewable credit requirement for each state.

---
|**Column Name** | **Description**|
| :------------ | :-----------|
|From_state | The state that |
|To_state | The state that |
|RPS | State RPS requirement for state in column "From_state"|
---




