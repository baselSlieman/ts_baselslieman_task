# ts_baselslieman_task

after create a new account on infura platforme and get api key:
1- create new angular project
2- create home component
3- create home serivce file
4- add new route to home component with empty path
5- install "web3" package in the project
6- import web3 package in home service file
7- initialize web3 instance and pass provider as infura api url string in the constructor:
    web3js =new Web3("https://mainnet.infura.io/v3/9b9ffabc118741939d2cd985ee299c3f");
8- create sevrice called "getLastBlockNumber()" to call it in onInit() function in home component to display list block number when access the site>
9- create service called "getBalance()" that take address string as parameter and call it in onSubmit() function.
10- the site contains form with text input to let user enter address the he need to get its balance and "error message" if the address is incorrect.
11- the site will display the balance of ethereum directly in the page.
12- finally disable default testing tools: Jasmine and Karma
13- install "jest" package in the project>
14- create simple unit test to test "web3 pakcage version" and execute testing by run: ng test.


