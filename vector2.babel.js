/**
 * @author       Anthony Vorobyov <xbaldr71@gmail.com>
 * @copyright    2018 Anthony Vorobyov
 * @license      MIT License
 * @version      0.2.4b
 */
"use strict";
/**
 * @class Vector2
 * Class representing a vector.
 */

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Vector2 = (function() {
  /**
     * Creates the vector.
     * @param {Number} x - The x value.
     * @param {Number} y - The y value.
     */
  function Vector2(x, y) {
    _classCallCheck(this, Vector2);

    this.x = x;
    this.y = y;
    this.order = "XY";
  }
  /**
     * @access public
     * Gets the vector with coordinates (0; 0).
     * @example 
     * // returns Vector2 { x: 0, y: 0, order: 'XY' }
     * const vector = Vector2.zero;
     * @returns {Vector2}
     * @static 
     */

  _createClass(
    Vector2,
    [
      {
        key: "dot",

        /**
         * @access public
         * Dots vectors.
         * @param {Vector2} vector
         */
        value: function dot(vector) {
          if (vector instanceof Vector2) {
            this.x *= vector.x;
            this.y *= vector.y;
          }
        }
        /**
         * @access public
         * Clones the vector.
         * @returns {Vector2} 
         */
      },
      {
        key: "clone",
        value: function clone() {
          return new Vector2(this.x, this.y);
        }
        /**
         * @access public
         * Changes the vector parameters.
         * @param {Number} x 
         * @param {Number} y
         */
      },
      {
        key: "set",
        value: function set(x, y) {
          if (typeof x === "number" && !isNaN(x)) {
            this.x = x;
          }
          if (typeof y === "number" && !isNaN(y)) {
            this.y = y;
          }
        }
        /**
         * @access public
         * Add vector to current.
         * @param {Vector2} vector - Vector to add.
         */
      },
      {
        key: "add",
        value: function add(vector) {
          if (vector instanceof Vector2) {
            this.x += vector.x;
            this.y += vector.y;
          }
        }
        /**
         * @access public
         * Subtracts vector from current.
         * @param {Vector2} vector - Vector to subtract.
         */
      },
      {
        key: "subtract",
        value: function subtract(vector) {
          if (vector instanceof Vector2) {
            this.x -= vector.x;
            this.y -= vector.y;
          }
        }
        /**
         * @access public
         * Scales the vector.
         * @param {Number} value - The scalar coefficient.
         */
      },
      {
        key: "scale",
        value: function scale(value) {
          if (typeof value === "number") {
            this.x *= value;
            this.y *= value;
          }
        }
        /**
         * @access public
         * Gets the distance between two vectors.
         * @param {Vector2} vector
         * @returns {Number}
         */
      },
      {
        key: "getDistanceTowards",
        value: function getDistanceTowards(vector) {
          if (vector instanceof Vector2) {
            return Math.sqrt(
              Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2)
            );
          }
        }
        /**
         * @access public
         * Gets the vector magnitude.
         * @returns {Number}
         */
      },
      {
        key: "getMagnitude",
        value: function getMagnitude() {
          return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        }
        /**
         * @access public
         * Gets the angle between two vectors.
         * @param {Vector2} vector
         * @returns {Number}
         */
      },
      {
        key: "getAngleBeween",
        value: function getAngleBeween(vector) {
          if (vector instanceof Vector2) {
            return (
              Math.acos(
                (this.x * vector.x + this.y * vector.y) /
                  (this.getMagnitude() * vector.getMagnitude)
              ) *
              180 /
              Math.PI
            );
          }
        }
        /**
         * @access public
         * Normilizes the vector.
         */
      },
      {
        key: "normilize",
        value: function normilize() {
          var length = this.getMagnitude();

          if (length === 0) {
            this.set(0, 0);
          } else {
            this.set(this.x / length, this.y / length);
          }
        }
        /**
         * @access public
         * Gets the normilized vector.
         * @returns {Vector2}
         */
      },
      {
        key: "getNormilized",
        value: function getNormilized() {
          var vector = this.clone().normilize();
          return vector;
        }
        /**
         * @access public
         * Gets the vector from object with another type.
         * @param {Object|Vector2|Array|String} object
         * @returns {Vector2}
         */
      },
      {
        key: "from",
        value: function from(object) {
          if (object instanceof Object || object instanceof Vector2) {
            this.set(object.x, object.y);
          } else if (object instanceof Array) {
            this.set(object[0], object[1]);
          } else if (typeof object === "string") {
            // Convert string to array.
            return this.from(
              object
                .replace("]", "")
                .replace("[", "")
                .split(";")
            );
          }
          return this;
        }
        /**
         * @access public
         * Converts the vector to string.
         */
      },
      {
        key: "toString",
        value: function toString() {
          return "[" + this.x + "; " + this.y + "]";
        }
        /**
         * @access public
         * Converts the vector to array.
         */
      },
      {
        key: "toArray",
        value: function toArray() {
          return [this.x, this.y];
        }
        /**
         * @access public
         * Converts the vector to object.
         */
      },
      {
        key: "toObject",
        value: function toObject() {
          return {
            x: this.x,
            y: this.y
          };
        }
      }
    ],
    [
      {
        key: "dotProduct",

        /**
         * @access public
         * Returns a dot product of two vectors.
         * @param {Vector2} a - First vector.
         * @param {Vector2} b - Second vector.
         * @static
         */
        value: function dotProduct(a, b) {
          return a.x * b.x + a.y * b.y;
        }
      },
      {
        key: "zero",
        get: function get() {
          return new Vector2(0, 0);
        }
        /**
         * @access public
         * Shorthand for writing Vector2(-1, 0).
         * @returns {Vector2}
         * @static
         */
      },
      {
        key: "left",
        get: function get() {
          return new Vector2(-1, 0);
        }
        /** 
         * @access public
         * Shorthand for writing Vector2(1, 0).
         * @returns {Vector2}
         * @static
        */
      },
      {
        key: "right",
        get: function get() {
          return new Vector2(1, 0);
        }
        /**
         * @access public
         * Shorthand for writing Vector2(0, 1).
         * @returns {Vector2}
         * @static
         */
      },
      {
        key: "up",
        get: function get() {
          return new Vector2(0, 1);
        }
        /**
         * @access public
         * Shorthand for writing Vector2(0, -1).
         * @returns {Vector2}
         * @static
         */
      },
      {
        key: "down",
        get: function get() {
          return new Vector2(0, 1);
        }
      }
    ]
  );

  return Vector2;
})();
