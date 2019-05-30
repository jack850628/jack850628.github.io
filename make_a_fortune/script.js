var code_pattern = /((?:發大財)+) ((?:發大財)+) ((?:發大財)+) ((?:發大財)+)/;
var make_a_fortune = '發大財';

async function encode(str){
    return await new Promise(resolve => {
		setTimeout(() => {
			let code = '';
			for(let c of str){
				let t = c.charCodeAt().toString(16);
				t = '0'.repeat(4 - t.length) + t;
				let temp = '';
				for(let i of t){
					temp += make_a_fortune.repeat(parseInt(i,16)+1) + ' ';
				}
				code += temp.slice(0,-1) + '\n';
			}
			resolve(code.slice(0,-1));
		});
	});
}
async function decode(code){
	return await new Promise(resolve => {
		setTimeout(() => {
			let str = '';
			for(let c of code.split('\n')){
				let char = '';
				let map = c.match(code_pattern);
				if(map == null || map.length < 2)
					continue;
				for(let k = 1;k<map.length;k++){
					if(map[k].match(/^\s$/))
						continue;
					char += parseInt(map[k].match(new RegExp(make_a_fortune,'g')).length-1).toString(16);
				}
				str += String.fromCharCode(`0x${char}`,16).slice(0,-1);//需要.slice(0,-1)是因為String.fromCharCode會轉換出一個看不見的髒東西
			}
			resolve(str);
		});
	});
}