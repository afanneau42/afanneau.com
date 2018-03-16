var att = document.createAttribute("class");       // Create a "class" attribute
att.value = "test";                           // Set the value of the class attribute
document.getElementById('test').setAttributeNode(att);