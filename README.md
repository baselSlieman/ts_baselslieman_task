# ts_baselslieman_task<br />

after create a new account on infura platforme and get api key:<br />
1- create new angular project<br />
2- create home component<br />
3- create home serivce file<br />
4- add new route to home component with empty path<br />
5- install "web3" package in the project<br />
6- import web3 package in home service file<br />
7- initialize web3 instance and pass provider as infura api url string in the constructor:<br />
    web3js =new Web3("https://mainnet.infura.io/v3/9b9ffabc118741939d2cd985ee299c3f");<br />
8- create sevrice called "getLastBlockNumber()" to call it in onInit() function in home component to display list block number when access the site><br />
9- create service called "getBalance()" that take address string as parameter and call it in onSubmit() function.<br />
10- the site contains form with text input to let user enter address the he need to get its balance and "error message" if the address is incorrect.<br />
11- the site will display the balance of ethereum directly in the page.<br />
12- finally disable default testing tools: Jasmine and Karma<br />
13- install "jest" package in the project><br />
14- create simple unit test to test "web3 pakcage version" and execute testing by run: ng test.<br />


