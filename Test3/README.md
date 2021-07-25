# simple-basic-math-problems
# Test 3 : NodeJS/Loopback
Tech JDI is a company that creates programming tasks which are solved by candidates. After submitting their solution to a task, each candidate receives a report containing the number of points their solution scored, which is an integer between 0 and 100.
<br/>
<br/>
You are given two tables, tasks and reports, with the following structure:
<br/>
<br/>
##### create table tasks
> **id**: --  *integer* -- not null
> <br/> **name**: --  *varchar(40)* -- not null -- unique(id)

##### create table reports
> **id**:   *integer* not null
> <br/> **task_id**: --  *integer* -- not null
> <br/> **candidate**: --  *varchar(40)* -- not null
> <br/> **score**: --  *integer* -- not null -- unique(id)
---------------------------------------------------------------
Your task is to write an SQL query which assigns a difficulty rating to each task having at least one solution. 
<br/>
The difficulty of the task depends on the average score of all candidates solutions submitted for this task. 
<br/>
It is possible that one candidate have submitted multiple solutions for the same task; in this case, all of those solutions should be included in the average.
<br/>
There are three difficulties: Easy, Medium and Hard.
- If the average score for the task is lower than or equal to 20, then its difficulty is Hard.
- If the average is higher than 20 but lower than or equal to 60, then its difficulty is Medium.
- If the average is higher than 60, its difficulty is Easy.
<br/>
For example, if the average score of the task is 50, then its difficulty is Medium because the average score is greater than 20 but less then 60.
<br/>
<br/>
Your query should return a table containing three columns: task_id (ID of task), task_name (name of task) and difficulty − the difficulty of the task, which is one of three possible strings: Easy, Medium or Hard. 
<br/>
Rows should be ordered by increasing task_id. If no solutions exist for some task, that taskshould not appear in your table.
<br/>
With your complete SQL query, what is a performance optimization you can suggest?
<br/>
<br/>

#### Examble1
**Given:**
```sh
id  | name
101 | MinDist
123 | Equi
142 | Median
300 | Tricoloring
```
**reports:**
```sh
id | task_id | candidate       | score
13 | 101     | John Smith      | 100
24 | 123     | Delaney Lloyd   | 34
37 | 300     | Monroe Jimenez  | 50
49 | 101     | Stanley Price   | 45
51 | 142     | Tanner Sears    | 37
68 | 142     | Lara Fraser     | 3
83 | 300     | Tanner Sears    | 0
```
**your query should return:**
```
task_id | task_name     | difficulty
101     | MinDist       | Easy
123     | Equi          | Medium
142     | Median        | Hard
300     | Tricoloring   | Medium
```
#### Examble2
**Given:**
```sh
id  | name
3   | Cake
6   | GameOfNuts
7   | CircleIntersectionArea
9   | JessicaAndBrian
```
**reports:**
```sh
id  | task_id | candidate   | score
2   | 6       | Paul Sat    | 0
3   | 3       | Karen M.    | 30
5   | 3       | Oscar Glad  | 10
7   | 9       | Karen M.    | 60
11  | 6       | Paul Sat    | 81
13  | 6       | Paul Sat    | 100
```
**your query should return:**
```
task_id 		| task_name 		  | difficulty 
3 		      | Cake 			      | Hard 
6 		      | GameOfNuts 		  | Easy 
9 		      | JessicaAndBrian | Medium
```

---------------------------------------------------------------
<br/>

# Solution
```sh
SELECT
  t.id task_id,
  t.name task_name,
  CASE
    WHEN avg(score ) <= 20 THEN 'Hard'
    WHEN avg(score) <= 60 THEN 'Medium'
    ELSE 'Easy'
  END dificulty
FROM tasks t JOIN reports r ON ( t.id=r.task_id )
GROUP BY t.id, t.name
ORDER BY t.id;
```
