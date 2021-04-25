function isSubarray(subarray, array){
	  //subarrayの長さが1のときはincludeで判定する
	  if(subarray.length == 1){
	    return array.includes(subarray[0]);
	  }
	  //subarrayの長さが1以上のとき、json文字列に直して比較する
	  let subarray_str = JSON.stringify(subarray).slice(1,-1);//前後のカッコを除くためsliceする
	  let array_str = JSON.stringify(array).slice(1,-1);//前後のカッコを除くためsliceする

	  return array_str.includes(subarray_str);
	}

function isSubarray2(subarray, array){
	  //subarrayが空のとき常にtrue
	  if(subarray.length == 0){
	    return true;
	  }
	  let i = array.length - subarray.length + 1;
	  let subarray_str = JSON.stringify(subarray);
	  //arrayがsubarrayより短ければfalse
	  if(i<=0) return false;

	  while(i--){
	    //if(JSON.stringify(array[i])!=JSON.stringify(subarray[0]))continue;
		if(array[i]!=subarray[0])continue;
	    //もしsubarray[0]と同じ文字があれば、そこからsubarray長さ分だけsliceして比較
	    let array_str = JSON.stringify(array.slice(i,i+subarray.length));
	    if(subarray_str == array_str) return true;
	  }
	  return false;
	}

function isSubarray3(subarray, array){
	  //subarrayが空のとき常にtrue
	  if(subarray.length == 0){
	    return true;
	  }
	  let i = array.length - subarray.length + 1;
	  //arrayがsubarrayより短ければfalse
	  if(i<=0) return false;

	  while(i--){
	    for(let j=0;j<subarray.length;j++){
	      if(array[i+j]!=subarray[j]) break;
	      if(j == subarray.length-1) return true;
	    }
	  }
	  return false;
	}

function isSubarray4(subarray, array){
	  //subarrayが空のとき常にtrue
	  if(subarray.length == 0){
	    return true;
	  }
	  let i = array.length - subarray.length + 1;
	  let subarray_str = JSON.stringify(subarray);
	  //arrayがsubarrayより短ければfalse
	  if(i<=0) return false;

	  while(i--){
	    //arrayのi番目からsubarray長さ分だけsliceして比較
	    let array_str = JSON.stringify(array.slice(i,i+subarray.length));
	    if(subarray_str == array_str) return true;
	  }
	  return false;
	}

function isSubarray5(subarray,array){
	  if(isSubarray(subarray,array)){
	    return isSubarray4(subarray, array);
	  }else{
	    return false;
	  }
	}

function isSubarray6(subarray, array){
	  //要素にobjectがある場合、文字列化しておく
	  let onedim_subarray = []
	  for(let v of subarray){
	    if(typeof v == "object") onedim_subarray.push(JSON.stringify(v));
	    else onedim_subarray.push(v);    
	  };
	  //要素にobjectがある場合、文字列化しておく
	  let onedim_array = []
	  for(let v of array){
	    if(typeof v == "object") onedim_array.push(JSON.stringify(v));
	    else onedim_array.push(v);    
	  };

	  return isSubarray3(onedim_subarray, onedim_array);
	}

let pair0 = [[1,2,3], [1,2,3,4,5,6,7,8,9,10]] //ループの最後で見つかるケース（うしろから比較していることに注意）
let pair1 = [[8,9,10], [1,2,3,4,5,6,7,8,9,10]] //ループの最初で見つかるケース（うしろから比較していることに注意）
let pair2 = [[0,1,2], [1,2,3,4,5,6,7,8,9,10]] //先頭マッチもせず見つからないケース
let pair3 = [[1,2,3], [0,0,0,0,0,1,1,1,1,1]] //先頭マッチを5回するが見つからないケース
let pair4 = [[1,2,3], [1,1,1,1,1,1,1,1,1,1]] //先頭マッチを10回するが見つからないケース
let pair5 = [[[0],[2]], [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]] //2重リストで見つからないケース
let pair6 = [[[9],[10]], [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]] //2重リストでループの最初で見つかるケース

let loop = 100000;
let pairs = [pair0,pair1,pair2,pair3,pair4,pair5,pair6]
for(let i=0;i<pairs.length;i++){
  
  console.time("isSubarray_pair"+i);
  for(let j=0;j<loop;j++)isSubarray(pairs[i][0],pairs[i][1])
  console.timeEnd("isSubarray_pair"+i);

  console.time("isSubarray2_pair"+i);
  for(let j=0;j<loop;j++)isSubarray2(pairs[i][0],pairs[i][1])
  console.timeEnd("isSubarray2_pair"+i);

  console.time("isSubarray3_pair"+i);
  for(let j=0;j<loop;j++)isSubarray3(pairs[i][0],pairs[i][1])
  console.timeEnd("isSubarray3_pair"+i);

  console.time("isSubarray4_pair"+i);
  for(let j=0;j<loop;j++)isSubarray4(pairs[i][0],pairs[i][1])
  console.timeEnd("isSubarray4_pair"+i);

  console.time("isSubarray5_pair"+i);
  for(let j=0;j<loop;j++)isSubarray5(pairs[i][0],pairs[i][1])
  console.timeEnd("isSubarray5_pair"+i);

  console.time("isSubarray6_pair"+i);
  for(let j=0;j<loop;j++)isSubarray6(pairs[i][0],pairs[i][1])
  console.timeEnd("isSubarray6_pair"+i);

  console.log("");
}
