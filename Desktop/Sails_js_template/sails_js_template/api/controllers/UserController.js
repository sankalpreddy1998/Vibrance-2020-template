/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    add: function(req,res){
        console.log('got a post request : saving data');

        User.create(req.body)
        .then(function(){
            console.log(req.body);
            res.send('success');
        })
        .catch(function(error){
            console.log(error);
            res.send(error);
        });   
    }

};

