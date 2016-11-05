define(function (require,exports,module) {
   var obj={
      name:'张三',
      sayName:function () {
         return this.name;
      }
   };
   module.exports=obj;
});
