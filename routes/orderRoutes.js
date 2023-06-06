const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(
  cors({
      origin:`{process.env.CLIENT_URL}`,
  })
)
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
router.post("/placeorder", async (req, res)=>{
  try{
      const session = await stripe.checkout.sessions.create({
          payment_method_types:["card"],
          mode:"payment",
          line_items: req.body.items.map(item => {
              return{
                  price_data:{
                      currency:"inr",
                      product_data:{
                          name: item.name
                      },
                      unit_amount: (item.price)*100,

                  },
                  quantity: item.quantity
              }
          }),
          success_url: 'http://localhost:3000/success',
          cancel_url: 'http://localhost:3000/cancel'
      })

      res.json({url: session.url})

  }catch(e){
   res.status(500).json({error:e.message})
  }
})




router.post("/getuserorder", async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await Order.find({ userid }).sort({ _id: "-1" });
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});

router.get("/alluserorder", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});

router.post("/deliverorder", async (req, res) => {
  const orderid = req.body.orderid;
  try {
    const order = await Order.findOne({ _id: orderid });
    order.isDeliverd = true;
    await order.save();
    res.status(200).send("Order deliverd success");
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});
module.exports = router;