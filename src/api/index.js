import { version } from "../../package.json";
import { Router } from "express";

export default ({ config, db }) => {
  let api = Router();

  api.get("/billingslab", (req, res) => {

    db.query(`SELECT * from billingslab where status=${true}`, (err, response) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(response.rows);
        res.json({ "billingslab": response.rows });
      }
    });


  });

  api.get("/billingslab/:id", (req, res) => {

    db.query(`SELECT * from billingslab where id=${req.params.id} and status=${true}`, (err, response) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(response.rows);
        res.json({ "billingId": response.rows });
      }
    });
  });

  api.post("/billingslab", (req, res) => {

    console.log("body", req.body);
    const { id, product_id, price } = req.body;
    db.query(`insert into billingslab values(${id},${product_id},${price})`, (err, response) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(response.rows);
        res.json({ "status": "successfull", "response": response.rows });
      }
    });
  });

  api.put("/billingslab/:id", (req, res) => {
    console.log("req", req.params);
    console.log("body", req.body);
    const { product_id, price } = req.body
    db.query(`update billingslab set product_id=${product_id},price=${price} 
    where id=${req.params.id} and status=${true}`, (err, response) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(response.rows);
        res.json({ "status": "successfull", "response": response.rows });
      }

    })

  });

  api.delete("/billingslab/:id", (req, res) => {
    console.log("req", req.params);
    const { status } = req.body;
    db.query(`update billingslab set status=${false} 
    where id=${req.params.id}`, (err, response) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(response.rows);
        res.json({ version, status: "live", method: "delete" });
      }
    })
  });



  api.get("/billingslab_est", (req, res) => {
    // console.log(req.body, 'body');
    let arr = [];
      db.query(`select * from billingslab where status=${true} `, (err, response) => {
        if (err) {
          console.log(err.stack);
        } else {
          req.body.forEach(elements => {
            response.rows.forEach(item =>{
              if(elements.product_id==item.product_id){
                arr.push({"product id :" : elements.product_id , "quantity : " :elements.qty ,
                "estimated price :":elements.qty * item.price});
              }
            });
          });
          res.json({"estimate":arr});   
          console.log (arr)      
        }        
      })
    }); 
  return api;
};
