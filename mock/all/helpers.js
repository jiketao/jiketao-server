/*
 * 模板方法
 * usage: [group]:[type] 
 *        eg address:zipCode 
 *
* address
  * zipCode
  * city
  * cityPrefix
  * citySuffix
  * streetName
  * streetAddress
  * streetSuffix
  * streetPrefix
  * secondaryAddress
  * county
  * country
  * countryCode
  * state
  * stateAbbr
  * latitude
  * longitude
* commerce
  * color
  * department
  * productName
  * price
  * productAdjective
  * productMaterial
  * product
* company
  * suffixes
  * companyName
  * companySuffix
  * catchPhrase
  * bs
  * catchPhraseAdjective
  * catchPhraseDescriptor
  * catchPhraseNoun
  * bsAdjective
  * bsBuzz
  * bsNoun
* date
  * past
  * future
  * between
  * recent
  * month
  * weekday
* fake
* finance
  * account
  * accountName
  * mask
  * amount
  * transactionType
  * currencyCode
  * currencyName
  * currencySymbol
* hacker
  * abbreviation
  * adjective
  * noun
  * verb
  * ingverb
  * phrase
* helpers
  * randomize
  * slugify
  * replaceSymbolWithNumber
  * replaceSymbols
  * shuffle
  * mustache
  * createCard
  * contextualCard
  * userCard
  * createTransaction
* image
  * image
  * avatar
  * imageUrl
  * abstract
  * animals
  * business
  * cats
  * city
  * food
  * nightlife
  * fashion
  * people
  * nature
  * sports
  * technics
  * transport
* internet
  * avatar
  * email
  * userName
  * protocol
  * url
  * domainName
  * domainSuffix
  * domainWord
  * ip
  * userAgent
  * color
  * mac
  * password
* lorem
  * words
  * sentence
  * sentences
  * paragraph
  * paragraphs
* name
  * firstName
  * lastName
  * findName
  * jobTitle
  * prefix
  * suffix
  * title
  * jobDescriptor
  * jobArea
  * jobType
* phone
  * phoneNumber
  * phoneNumberFormat
  * phoneFormats
* random
  * number
  * arrayElement
  * objectElement
  * uuid
  * boolean
*/
 
var Faker = require('faker');

var helpers = {};

define(Faker, '');

function define(obj, ns) {
	var keys = Object.keys(obj);
	keys.forEach(function(key) {
		var type = typeof obj[key];
		var fn = obj[key];
		if (type === 'object') {
			define(fn, key);
		} else if (type === 'function'){
			if (ns === '') {
				helpers[key] = wrap(fn);
			} else {
				helpers[ns + ':' + key] = wrap(fn);
			}
		}
	});
}

function wrap(fn) {
	return function() {
		// 默认的最后一个参数是dummy-json自己添加的，去除
		var args = [].slice.call(arguments, 0, -1);
		var ret = fn.apply(this, args);
		if (typeof ret === 'string') {
			return ret.replace(/\r|\n/gi, '\\n');
		} 
		return ret;
	}
}

helpers.title = function() {
	var titles = ["BUSINESS CARDS","Standard Business Cards","Signature Business Cards","Brilliant Finish Business Cards","Raised Print Business Cards","Spot Gloss Business Cards","Metallic Finish Business Cards","Ultra Thick Business Cards","Economy Business Cards","Personal Business Cards","Folded Business Cards","Business Card Holders","Networking Cards","Appointment Cards","Parent Cards","BUSINESS SERVICES","Logo Design","Mailing Lists","Toll Free 800 Number","Credit Card Processing","Incorporate Today","Partner Marketplace","Postage Meters","CALENDARS","Wall Calendars","Desk Calendars","Magnetic Calendars","Pocket Calendars","Poster Calendars","CHECKS","Checks","Credit Card Processing","Gift Certificates","CORPORATE GIFTS","Promotional Products","Personalized Mugs","Pens","Can Coolers","Bottle Openers","USB Flash Drives","Calculators","Stress Balls","Tape Measures","Letter Openers","Keychain Flashlights","Rulers","Magnetic Clips","Mouse Pads","CUSTOM CLOTHING","T-shirts","Men's T-Shirts","Women's T-Shirts","Kids T-Shirts","Polo Shirts","Men's Polo Shirts","Women's Polo Shirts","Hats","Hoodies","Classic Cotton Tote Bags","Promotional Products","Design Services","DIGITAL MARKETING","Websites","Website Design Services","Domain Names","Social Media Marketing","Email Marketing","Local Search Profile","Business Email","HOLIDAY PRODUCTS","Holiday Cards","Christmas Address Labels","Gift Tags","INVITATIONS & ANNOUNCEMENTS","Wedding Invitations","Save the Dates","Birthday Invitations","Birth Announcements","Baby Shower Invitations","Party Invitations","Moving Announcements","Graduation Invitations","Business Invitations","Religious Announcements","Holiday Party Invitations","LABELS & STICKERS","Address Labels","Return Address Labels","Mailing Labels","Stickers & Decals","Custom Stickers","Product Labels","Bumper Stickers","Window Decals","Business Card Stickers","Tags","Gift Tags","Name Tags","MAGNETS","Car Door Magnets","Magnetic Business Cards","Postcard Magnets","Magnetic Calendars","Photo Magnets","MARKETING MATERIALS","Postcards","Flyers","Postcard Mailing Services","Brochures","Door Hangers","Menus","Rack Cards","Gift Certificates","Presentation Folders","Loyalty Cards","Magnets","Bookmarks","Promotional Products","Corporate Gifts","How to Create Marketing Materials","PHONE CASES","Samsung Galaxy Cases","iPhone Cases","PHOTO GIFTS","Personalized Mugs","Wall Calendars","Phone Cases","Desk Calendars","Canvas Prints","Photo Cards","Photo Books","Mouse Pads","Photo Magnets","Bookmarks","Puzzles","Promotional Products","SIGNS & POSTERS","Banners","Posters","Lawn Signs","Lawn Signs","Political Signs","Construction Signs","Real Estate Signs","Car Door Magnets","Engraved Door Signs","Window Decals","Engraved Desk Signs","Plastic Signs","Bumper Stickers","STAMPS & INK","Self-Inking Stamps","Pre-Inked Stamps","Signature Stamps","Date Stamps","Pocket Stamps","Embossers","Replacement Ink","STATIONERY","Address Labels","Return Address Labels","Mailing Labels","Pens","Letterhead","Notebooks","Envelopes","Note Pads","Envelope Seals","Note Cards","Appointment Cards","Thank You Cards","Sticky Notes","Sticky Note Holders","Holiday Cards"];
	var len = titles.length
	var index = Math.floor(Math.random() * len - 1);
	return titles[index];
}

module.exports = helpers;


