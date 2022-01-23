/* tslint:disable */
/* eslint-disable */
/**
 * nemesis-backend API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface Contract
 */
export interface Contract {
    /**
     * 
     * @type {number}
     * @memberof Contract
     */
    id?: any;
    /**
     * 
     * @type {Date}
     * @memberof Contract
     */
    createdAt?: any;
    /**
     * 
     * @type {string}
     * @memberof Contract
     */
    fileName?: any;
    /**
     * 
     * @type {number}
     * @memberof Contract
     */
    fileId?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Contract
     */
    old?: any;
    /**
     * 
     * @type {string}
     * @memberof Contract
     */
    contractNumber?: any;
    /**
     * 
     * @type {PaymentFrequency}
     * @memberof Contract
     */
    paymentFrequency?: any;
    /**
     * 
     * @type {Partner}
     * @memberof Contract
     */
    contractor?: any;
}
