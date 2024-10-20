const home= async(req, res)=>{
  res.status(200).send("This is the home page");
};

const register= async(req, res)=>{
  res.status(200).send("This is the register page");
};

module.exprorts= {home, register};
