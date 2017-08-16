/**
 * Created by pc on 12/29/2016.
 */
let str = "https://preprod.signicat.com/std/method/bolink.no?id=nbid-mobil::nb&target=http%3A%2F%2Flocalhost%3A3004/api%2Fintegrations%2Fsignicat%2Flogin%2Fuser-saml?id=5864d6da71287427f8e72934";
var re = /(?:\?id=)(\w*$)/g;
let q = re.exec(str);
let b = str.match(re);

console.log(/[0-9]+/.test("laskdjflasjkdf"), '<- password strength');
console.log(/[0-9]+/.test("309sadf2429sdf3402"), '<- password strength');

var emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
console.log(emailValidator.test('@n26yadenx.ru'));


var myRe = /(?:(\/))[\w-]+/g;
str = "https://beta.esignering.no/rest/v1/oppdrag/60f0fc16-4a9e-431a-805c-4792b6755b59";
var myArray = str.match(myRe);
console.log(myArray[myArray.length - 1].replace('/', ''));


var he = /(?:\d+)/;
console.log("12312213dsfsdf".match(he));


let query = "http://localhost:3004/api/users/passwd/5864bf4262418a2ae4506f76";


let extractToken = /(?:\/)([\w.\-_]*$)/g.exec(query);
let extractMongoDbId = /(?:\/)(\w*$)/g.exec(query);


let urlWithToken = "http://localhost:3002/1118/ambita-login?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4NzhjNjBmMzRkODRkMmE2Y2Q1OTYwYiIsInR5cGUiOjIsImlhdCI6MTQ4NDMxMDAzMSwiZXhwIjoxNDg2OTAyMDMxfQ.7Jt3OS7na3lSwZLfRwrRsbVCZMRVrCDEWgc6k2eHepo"
let bidderToken = /(?:\?token=)([\w.\-_]*$)/g.exec(urlWithToken);
console.log(bidderToken[1])


process.exit(0);