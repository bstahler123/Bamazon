var mysql = require("mysql");
var inquirer = require('inquirer');
var apples;
var jeans;
var carrots;
var bananas;
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",


    password: "",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});


connection.query("SELECT * FROM items", function(err, res) {
    if (err) throw err;
    console.log(res);
    buyItem();
});

function buyItem() {
    inquirer.prompt([{
        type: "list",
        message: "What item would you like to buy",
        choices: ["Bag of apples", "Jeans", "Banana's", "Carrot's"],
        name: "input"

    }]).then(function(data) {
        switch (data.input) {
            case "Bag of apples":
                buyApples();
                break;
            case "Jeans":
                buyJeans();
                break;
            case "Carrot's":
                buyCarrots();
                break;
            case "Banana's":
                buyBananas();
                break;
        }
    });
}

function buyApples() {

    inquirer.prompt([{
        type: "text",
        message: "How many would you like to buy?",
        name: "input"

    }]).then(function(data) {
        connection.query("SELECT * FROM items WHERE item_Name=?", ["Bag of apples"], function(err, res) {


            for (var i = 0; i < res.length; i++) {
                if (res[i].stock_quantity >= data.input) {
                    apples = res[i].stock_quantity - data.input;
                    console.log("Congrats you bought " + data.input + " Bags of apples!");
                    console.log("Here is what is left in stock  " + res[i].id + " | " + res[i].item_Name + " | " + res[i].price + " | " + apples);


                } else {
                    console.log("Sorry we don't seem to have those item's in stock")
                    buyItem();

                };
            }

        });
    })

};

function buyJeans() {

    inquirer.prompt([{
        type: "text",
        message: "How many would you like to buy?",
        name: "input"

    }]).then(function(data) {
        connection.query("SELECT * FROM items WHERE item_Name=?", ["Jeans"], function(err, res) {


            for (var i = 0; i < res.length; i++) {
                if (res[i].stock_quantity >= data.input) {
                    jeans = res[i].stock_quantity - data.input;
                    console.log("Congrats you bought " + data.input + " pair's of jeans");
                    console.log("Here is what is left in stock  " + res[i].id + " | " + res[i].item_Name + " | " + res[i].price + " | " + jeans);


                } else {
                    console.log("Sorry we don't seem to have those item's in stock")
                    buyItem();

                };
            }

        });
    })

};

function buyCarrots() {

    inquirer.prompt([{
        type: "text",
        message: "How many would you like to buy?",
        name: "input"

    }]).then(function(data) {
        connection.query("SELECT * FROM items WHERE item_Name=?", ["Carrot's"], function(err, res) {


            for (var i = 0; i < res.length; i++) {
                if (res[i].stock_quantity >= data.input) {
                    carrots = res[i].stock_quantity - data.input;
                    console.log("Congrats you bought " + data.input + " Carrot's");
                    console.log("Here is what is left in stock  " + res[i].id + " | " + res[i].item_Name + " | " + res[i].price + " | " + carrots);


                } else {
                    console.log("Sorry we don't seem to have those item's in stock")
                    buyItem();

                };
            }

        });
    })

};

function buyBananas() {

    inquirer.prompt([{
        type: "text",
        message: "How many would you like to buy?",
        name: "input"

    }]).then(function(data) {
        connection.query("SELECT * FROM items WHERE item_Name=?", ["Banana's"], function(err, res) {


            for (var i = 0; i < res.length; i++) {
                if (res[i].stock_quantity >= data.input) {
                    bananas = res[i].stock_quantity - data.input;
                    console.log("Congrats you bought " + data.input + " Banana's");
                    console.log("Here is what is left in stock  " + res[i].id + " | " + res[i].item_Name + " | " + res[i].price + " | " + bananas);
                    connection.query("UPDATE items SET ? WHERE ?", [{
                           stock_quantity: bananas
                        }, {
                            items: "Banana's"
                        }],
                        function(err, res) {});
                            buyItem();


                } else {
                    console.log("Sorry we don't seem to have those item's in stock")
                    buyItem();

                };

            }

        });
    })


};

