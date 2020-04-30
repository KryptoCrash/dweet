// FINAL

for(i=0,c=2e3;i<c;x.fillRect(i&&(i+t*1e2)%c,i&&540+S(i*i)*c,s=i++?S(i)*9:c,s))x.fillStyle=R(a=i?S(i-t)*255:0,a,a,i+.4)

// Tutorial code and explanations

for(
    i=0;
    i<C;
    x.fillRect(
        i && (i * C + t * C) % C, 
        i && 540 + S(i * i) * C,
        s= i++ ? S(i) * 9 : 2000,
        s
    )
) x.fillStyle=R(a=i?255:0,a,a)

// X
// i == 0 ? 0 : (i * C + t * C) % C
// i?(1e2*t+i)%k:0
/*

Stars seperated => i * C
Moving left to right over time => t * C
Looping back around after they go too far right => % C



*/

// Y
// i == 0 ? 0 : 540 + S(i * i) * C
// i?540+ 1e3*S(i*i):0
/*

Center y values at center of screen => 540 + ...
Stars seperated (randomized kind of...) => S(i * i) * C

*/

/*

W & H

i == 0 ? 2000 : S(i) * 9
i?S(i)*9:2000,

Size of stars between 0-9 => S(i) * 9

*/

/*

Black bgrd & white stars => star 0
x, y == 0
w, h == c.w, c.h
color R(0,0,0)

star != 0
x, y == x, y
w, h == S(i) * 9
color R(255, 255, 255)

*/