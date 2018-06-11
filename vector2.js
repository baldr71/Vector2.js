/**
 * @author       Anthony Vorobyov <xbaldr71@gmail.com>
 * @copyright    2018 Anthony Vorobyov
 * @license      MIT License
 * @version      0.2.4b
 */
'use strict';
/**
 * @class Vector2
 * Class representing a vector.
 */
class Vector2 {
    /**
     * Creates the vector.
     * @param {Number} x - The x value.
     * @param {Number} y - The y value.
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.order = 'XY';
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
    static get zero() {
        return new Vector2(0, 0);
    }
    /**
     * @access public
     * Shorthand for writing Vector2(-1, 0).
     * @returns {Vector2}
     * @static
     */
    static get left() {
        return new Vector2(-1, 0);
    }
    /** 
     * @access public
     * Shorthand for writing Vector2(1, 0).
     * @returns {Vector2}
     * @static
    */
    static get right() {
        return new Vector2(1, 0);
    }
    /**
     * @access public
     * Shorthand for writing Vector2(0, 1).
     * @returns {Vector2}
     * @static
     */
    static get up() {
        return new Vector2(0, 1);
    }
    /**
     * @access public
     * Shorthand for writing Vector2(0, -1).
     * @returns {Vector2}
     * @static
     */
    static get down() {
        return new Vector2(0, 1);
    }
    /**
     * @access public
     * Returns a dot product of two vectors.
     * @param {Vector2} a - First vector.
     * @param {Vector2} b - Second vector.
     * @static
     */
    static dotProduct(a, b) {
        return a.x * b.x + a.y * b.y;
    }
    /**
     * @access public
     * Dots vectors.
     * @param {Vector2} vector
     */
    dot(vector) {
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
    clone() {
        return new Vector2(this.x, this.y);
    }
    /**
     * @access public
     * Changes the vector parameters.
     * @param {Number} x 
     * @param {Number} y
     */
    set(x, y) {
        if (typeof x === 'number' && 
            !isNaN(x))
        {
            this.x = x;
        }
        if (typeof y === 'number' &&
            !isNaN(y))
        {
            this.y = y;
        }
    }
    /**
     * @access public
     * Add vector to current.
     * @param {Vector2} vector - Vector to add.
     */
    add(vector) {
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
    subtract(vector) {
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
    scale(value) {
        if (typeof value === 'number') {
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
    getDistanceTowards(vector) {
        if (vector instanceof Vector2) {
            return Math.sqrt( (this.x - vector.x) ** 2 + (this.y - vector.y) ** 2 );
        }
    }
    /**
     * @access public
     * Gets the vector magnitude.
     * @returns {Number}
     */
    getMagnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    /**
     * @access public
     * Gets the angle between two vectors.
     * @param {Vector2} vector
     * @returns {Number}
     */
    getAngleBeween(vector) {
        if (vector instanceof Vector2) {
            return Math.acos( (this.x * vector.x + this.y * vector.y) / 
                            (this.getMagnitude() * vector.getMagnitude) ) * 180 / Math.PI;
        }
    }
    /**
     * @access public
     * Normilizes the vector.
     */
    normilize() {
        const length = this.getMagnitude();

        if (length === 0) {
            this.set(0, 0);
        } else {
            this.set(this.x / length, 
                    this.y / length);
        }
    }
    /**
     * @access public
     * Gets the normilized vector.
     * @returns {Vector2}
     */
    getNormilized() {
        const vector = this.clone().normilize();
        return vector;
    }
    /**
     * @access public
     * Gets the vector from object with another type.
     * @param {Object|Vector2|Array|String} object
     * @returns {Vector2}
     */
    from(object) {
        if (object instanceof Object ||
            object instanceof Vector2)
        {
            this.set(object.x, object.y);
        } else if (object instanceof Array) {
            this.set(object[0], object[1]);
        } else if (typeof object === 'string') {
            // Convert string to array.
            return this.from(object.replace(']', '').replace('[', '').split(';'));
        }
        return this;
    }
    /**
     * @access public
     * Converts the vector to string.
     */
    toString() {
        return `[${this.x}; ${this.y}]`;
    }
    /**
     * @access public
     * Converts the vector to array.
     */
    toArray() {
        return [this.x, this.y];
    }
    /**
     * @access public
     * Converts the vector to object.
     */
    toObject() {
        return {
            x: this.x,
            y: this.y
        }
    }
}
