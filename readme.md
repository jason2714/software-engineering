## View at
[Init Demo](https://jason2714.github.io/software-engineering/%E4%B8%BB%E6%8E%A7%E5%8F%B0%E9%A0%81%E9%9D%A2)
[Final Version With Php](https://jason2714.github.io/software-engineering/%E6%8F%9A%E6%98%87/%E4%B8%BB%E6%8E%A7%E5%8F%B0%E9%A0%81%E9%9D%A2)

## PHP cmd
$conn->addCombo("美式套餐",70,"./images/combo/美式套餐.jpg","漢堡,薯條","好吃");
$conn->addCombo("內湖熱狗堡",90,"./images/combo/內湖熱狗堡.jpg","熱狗,熱狗,熱狗","金寶逼你食");
$conn->addCombo("晨博套餐",69,"./images/combo/晨博套餐.jpg","熱狗,荷包蛋","陳柏霖大力推荐");
$conn->addCombo("薯條套餐", 45, "./images/combo/薯條套餐.jpg", "薯條,紅茶", "好ㄘ");
$conn->addCombo("好多飲料套餐", 30, "./images/combo/好多飲料套餐.jpg", "奶茶,紅茶", "豪好喝");
$conn->addCombo("沒有比較便宜套餐", 60, "./images/combo/沒有比較便宜套餐.jpg", "牛肉三明治,紅茶", "好貴");
$conn->addCombo("寫程式好累套餐", 45, "./images/combo/寫程式好累套餐.jpg", "薯條,奶茶", "好累喔");
$conn->addCombo("都是點心套餐", 60, "./images/combo/都是點心套餐.jpg", "薯條,抓餅", "會胖");

$conn->addItem("蘿蔔糕","點心",70,"./images/item/蘿蔔糕.jpg","好吃");
$conn->addItem("炸雞塊","點心",70,"./images/item/炸雞塊.jpg","好吃");
$conn->addItem("熱狗","點心",70,"./images/item/熱狗.jpg","好吃");
$conn->addItem("蛋餅","點心",70,"./images/item/蛋餅.jpg","好吃");
$conn->addItem("包子","點心",70,"./images/item/包子.jpg","好吃");
$conn->addItem("抓餅","點心", 35, "./images/item/抓餅.jpg", "這是點心嗎0.0");

$conn->addItem("鮪魚三明治","三明治",70,"./images/item/鮪魚三明治.jpg","好吃");
$conn->addItem("肌肉三明治","三明治",70,"./images/item/肌肉三明治.jpg","好吃");
$conn->addItem("牛肉三明治","三明治",70,"./images/item/牛肉三明治.jpg","好吃");
$conn->addItem("總匯三明治","三明治",70,"./images/item/總匯三明治.jpg","好吃");
$conn->addItem("里肌三明治","三明治",70,"./images/item/里肌三明治.jpg","好吃");

$conn->addItem("奶茶","飲料",20,"./images/item/奶茶.jpg","保證拉肚子");
$conn->addItem("苦瓜汁","飲料",25,"./images/item/苦瓜汁.jpg","苦");
