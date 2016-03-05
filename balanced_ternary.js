t=function(a){
	v="";
	if(0==a){
		v="0";
	}else{
		N = a < 0;
		a *= N ? -1 : 1;
		while(a){
			d=N?"0-+":"0+-";
			v=d[r=a%3]+v;
			2==r&&++a;
			a/=3;
			a|=0;		
		}
	}
	return v;
}
