var code_pattern = /((?:發大財)+) ((?:發大財)+) ((?:發大財)+) ((?:發大財)+)/;
var make_a_fortune = '發大財';

const RETURN = 'complete';
/**
 * 將任何字串編碼成發大財語
 * @param string str 要編碼的字串
 * @param function(string,float) getString(編碼好的一個字, 編碼進度)
 */
async function encode(str,getString){
	return await new Promise(resolve => {
		var index = 0;
		var progress = 0;
		var unit = 100 / str.length;
		var f = () => {
			let t = str[index++].charCodeAt().toString(16);
			t = '0'.repeat(4 - t.length) + t;
			let temp = '';
			for(let i of t){
				temp += make_a_fortune.repeat(parseInt(i,16)+1) + ' ';
			}
			if(index < str.length){
				getString(temp.slice(0,-1) + '\n', progress += unit);
				setTimeout(f)
			}else{
				getString(temp.slice(0,-1), progress += unit);
				resolve(RETURN);
			}
		};
		if(index < str.length)
			setTimeout(f);
		else
			resolve(RETURN);
	});
}
/**
 * 將發大財語解碼回原本的字串
 * @param string code 要解碼的字串
 * @param function(string,float) getString(解碼好的一個字, 編碼進度)
 */
async function decode(code,getString){
	return await new Promise(resolve => {
		var index = 0;
		var arr = code.split('\n');
		var progress = 0;
		var unit = 100 / arr.length;
		var f = () => {
			let char = '';
			let map = arr[index++].match(code_pattern);
			if(map != null && map.length > 1){
				for(let k = 1;k<map.length;k++){
					if(map[k].match(/^\s$/))
						continue;
					char += parseInt(map[k].match(new RegExp(make_a_fortune,'g')).length-1).toString(16);
				}
				getString(String.fromCharCode(`0x${char}`,16).slice(0,-1), progress += unit);//需要.slice(0,-1)是因為String.fromCharCode會轉換出一個看不見的髒東西
			}
			if(index < arr.length)
				setTimeout(f);
			else
				resolve(RETURN);
		};
		if(index < arr.length)
			setTimeout(f);
		else
			resolve(RETURN);
	});
}
