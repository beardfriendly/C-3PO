// =================
// Helper Functions
// =================

//
// Buffer end checker
//

exports.bufferEnd = function(arrOriginal, arrFinal, callback, data)
{
   if (arrOriginal.length === arrFinal.length)
   {
      return callback(arrFinal, data);
   }
};

//
// Check user permission
//

exports.checkPerm = function(member, channel, perm)
{
   return channel.permissionsFor(member).has(perm);
};

//
// Get key name of object by its value
//

exports.getKeyByValue = function (object, value)
{
   return Object.keys(object).find(key => object[key] === value);
};

//
// Remove duplicates from array
//

exports.removeDupes = function (array)
{
   return Array.from(new Set(array));
};

//
// Replace all matches in string
//

exports.replaceAll = function(str, search, replacement)
{
   return str.replace(new RegExp(search, "g"), replacement);
};

//
// Sort array by specific key
//

exports.sortByKey = function(array, key)
{
   return array.sort(function(a, b)
   {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
   });
};

//
// Split string to array if not array
//

exports.arraySplit = function(input, sep)
{
   if (input.constructor === Array && input.length > 0)
   {
      return input;
   }
   return input.split(sep);
};
