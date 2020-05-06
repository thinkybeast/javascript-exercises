/*
Here's all the required information for an item:

  SKU code: This is the unique identifier for a product. It consists of the first 3 letters of the item and the first 2 letters of the category. If the item name consists of two words and the first word consists of two letters only, the next letter is taken from the next word.

  Item name: This is the name of the item. It must consist of a minimum of 5 characters. Spaces are not counted as characters.

  Category: This is the category that the item belongs to. It must consist of a minimum of 5 characters and be only one word.

  Quantity: This is the quantity in stock of an item. This must not be blank. You may assume that a valid number will be provided.

The following are the methods that the items manager can perform:

  create: This method creates a new item. Returns false if creation is not successful.

  update: This method accepts an SKU Code and an object as an argument and updates any of the information on an item. You may assume valid values will be provided.

  delete: This method accepts an SKU Code and deletes the item from the list. You may assume a valid SKU code is provided.

  items: This property returns all the items.

  inStock: This method list all the items that have a quantity greater than 0.

  itemsInCategory: This method list all the items for a given category

The following are the methods on the reports managers:

  init: This method accepts the ItemManager object as an argument and assigns it to the items property.

  createReporter: This method accepts an SKU code as an argument and returns an object.
    -- The returned object has one method, itemInfo. It logs to the console all the properties of an object as "key:value" pairs (one pair per line). There are no other properties or methods on the returned object (except for properties/methods inherited from Object.prototype).

  reportInStock: Logs to the console the item names of all the items that are in stock as a comma separated values.

*/


/*
// Item class
Item Object {
  SKU: createSKU(),
  name: name,
  category: category,
  stock: stock
}
 or
 {
   notValid: true,
 }

// Item manager object
 {
  var items = []

  create: create(name, category, quantity),
    - validates item info and adds to array, returns item created or false
  update: update(sku, infoObj),
    - updates given item wth valid info, returns item
  delete: delete(sku),
    - deletes given item from array
  item: item(sku)
    - returns item at SKU or null
  items: items
    ー returns items array copy
  inStock: instock
    - returns fitered array of instock items
  itemsInCategory: itemsInCategory
    - returns filtered array of items in category
 }

 // ReportManager
{
  function Reporter(SKU) {
    var item = itemManager.item(SKU)
    function itemInfo() {}
    return {
      itemInfo: itemInfo,
    }
  }
  items: itemManager
  init: init(ItemManager)
    - sets this.items to itemManager
  createReporter: createReporter(SKU)
    - creates a Reporter Object
  reportInStock: reportInStock(){}
    - logs names of items in stock
}

*/

// Item is a constructor function with private methods
let Item = (function () {
  function validName(name) {
    let strippedName = name.split(' ').join('');
    return strippedName.length >= 5;
  }
  function validCategory(category) {
    return category.split(' ').length === 1 && category.length >= 5;
  }
  function validQuantity(quantity) {
    return quantity >= 0;
  }

  function generateSKU() {
    let strippedName = this.name.split(' ').join('');
    let newSKU = (strippedName.slice(0,3) + this.category.slice(0, 2)).toUpperCase();
    return newSKU;
  }

  return function(name, category, quantity) {
    if (validName(name) && validCategory(category) && validQuantity(quantity)) {
      this.name = name;
      this.category = category;
      this.quantity = quantity;
      this.SKU = generateSKU.call(this);
    } else {
      return { notValid: true };
    }
  };
})()

let ItemManager = (function(){
  let create = function(name, category, quantity) {
    let newItem = new Item(name, category, quantity);
    if(newItem.notValid) {
      return false;
    } else {
      this.items.push(newItem);
      return newItem;
    }
  }

  let item = function(SKU) {
    return this.items.find(function(item) {
      return item.SKU === SKU;
    });
  }

  let update = function(SKU, infoObj) {
    let itemToUpdate = this.item(SKU);
    Object.assign(itemToUpdate, infoObj);
  }

  let inStock = function() {
    return this.items.filter(function(item) {
      return item.quantity > 0;
    });
  }

  let itemsInCategory = function(category) {
    return this.items.filter(function(item) {
      return item.category === category;
    });
  }

  return {
    create: create,
    update: update,
    delete: function(SKU) {
      let itemIdx = this.items.findIndex(function(item) {
        return item.SKU === SKU;
      });
      if (itemIdx !== -1) {
        this.items.splice(itemIdx, 1);
        return true;
      } else {
        return false;
      }
    },
    item: item,
    items: [],
    inStock: inStock,
    itemsInCategory: itemsInCategory,
  }
})();

let ReportManager = (function() {

  let itemManager;

  return {
    init: function(manager) {
      itemManager = manager;
    },
    reportInStock: function() {
      let inStockNames = itemManager.inStock().map(function(item) {
        return item.name;
      }).join(', ');

      console.log(inStockNames);
    },
    createReporter: function(SKU) {
      let reportedItem = itemManager.item(SKU);

      return {
        itemInfo: function() {
          Object.keys(reportedItem).forEach(function(property){
            console.log(`${property}: ${reportedItem[property]}`)
          });
        },
      }
    },
  }
})();



ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot

console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

var kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10

