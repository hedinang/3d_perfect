import React, { useEffect, useRef } from 'react';

var N_FLOWERS = 20,
    PALETTE = [
        '#85a29e', '#f0d442',
        '#f59330', '#b22148'],
    p = ['M', 'C', ' '],
    w, h, flowers = [],
    m = null;

var rand = function (max, min, is_int) {
    var max = ((max - 1) || 0) + 1,
        min = min || 0,
        gen = min + (max - min) * Math.random()

    return is_int ? (~~gen) : gen;
};

var Flower = function () {
    var shape, fill, k, α, φ, f, ts,
        x, y, vx, vy, a, ax, ay, θ, ω

    this.init = function (t, ψ) {
        var dtxt = '', cx, cy, cr, γ, x0, y0,
            n = rand(10, 5, 1),
            β = 2 * Math.PI / n,
            ri = rand(20, 5),
            ro = rand(80, 50);

        x = rand(w, 0, 1);
        y = rand(h, 0, 1);
        θ = rand(2 * Math.PI);
        ω = rand(.02 * Math.PI, .005 * Math.PI);
        vx = vy = 0;

        fill = PALETTE[rand(4, 0, 1)];
        ts = t || 0;
        φ = (ψ || ψ === 0) ? ψ : rand(Math.PI);
        f = rand(.01, .001);
        α = Math.sin(φ);

        for (var i = 0; i < n; i++) {
            for (var j = 0; j < 4; j++) {
                if (j > 0 || i + j === 0) {
                    if (i === n - 1 && j === 3) {
                        cx = x0;
                        cy = y0;
                    }
                    else {
                        k = j % 3;
                        γ = (i + ~~(j / 2) + rand(.2, -.2)) * β
                        cr = (k ? ro : ri) + rand(10, -5)
                        cx = ~~(cr * Math.cos(γ))
                        cy = ~~(cr * Math.sin(γ))
                    }

                    if (i + j === 0) {
                        x0 = cx;
                        y0 = cy;
                    }

                    dtxt += p[Math.min(j, 2)] + cx + ' ' + cy;
                }
            }
        }

        shape = new Path2D(dtxt);
    }

    this.update = function (t, context) {
        var δ, dx, dy, d;

        θ += ω;

        α = Math.sin(φ + f * (t - ts));

        if (m) {
            dx = m.x - x;
            dy = m.y - y;

            d = Math.hypot(dx, dy);
            δ = Math.atan2(dy, dx);

            a = .0001 * d;
            ax = a * Math.cos(δ);
            ay = a * Math.sin(δ);

            vx += ax;
            vy += ay;

            x += vx;
            y += vy;
        }

        if (α <= 0) { this.init(t, 0); }

        this.draw(context);
    };

    this.draw = function (context) {
        // context.fillStyle = fill;
        context.globalAlpha = α;
        // context.font = "20px Arial";
        // context.fillText(text, 100, 100);
        // context.fillText(text, 100, 150);
        context.fillStyle = fill;
        context.save();
        context.translate(~~x, ~~y);
        // context.rotate(θ);

        context.fill(shape);
        context.stroke(shape);


        context.restore();
        this.write(context)
    }
    this.init()
    this.write = (c) => {

        var lineheight = 25;
        let text = 'Commerce is the new way of shopping. Here highly accurate 3D models\n' +
            'of products integrate with Augmented Reality experiences to show the customer\n' +
            'a graphic and interactive representation of the product. It is a pleasant \n' +
            'consequence of visual commerce. 3D technology allows customers to get in touch\n' +
            'with the product, exactly as it happens in store. It offers a new way to interact\n' +
            'with products. Customers can view them from any angle, rotate them, zoom in\n' +
            'and so on. They can do everything they would do in real life. The opportunities \n' +
            'that 3D and AR Commerce offers are innumerable.'

        var lines = text.split('\n');
        let x = 300
        let y = 90
        c.fillStyle = "white";
        c.font = "30pt Times New Roman";
        c.fillText('3D', x, y)
        y = y + lineheight


        // Ready to use the font in a canvas context
        console.log('font ready');

        // Add font on the html page
        // document.fonts.add(font);

        c.font = '17px Font name';
        // ctx.strokeText('Hello world', 100, 100);

        for (var i = 0; i < lines.length; i++)
            c.fillText(lines[i], x, y + (i * lineheight));

    }
}

let ani = (t, context) => {
    context.clearRect(0, 0, w, h)

    for (var i = 0; i < N_FLOWERS; i++) {
        flowers[i].update(t, context)
    }

    requestAnimationFrame(ani.bind(this, ++t, context))
}
export default function AnimationCanvas() {
    let ref = useRef();

    let click = (e) => {
        console.log('ssss');
    }
    useEffect(() => {
        var f = new FontFace('Font name', "url('./roboto/Roboto-Light.ttf')");
        f.load().then(function (font) {
            document.fonts.add(font);
            let canvas = ref.current
            let context = canvas.getContext('2d')
            var s = getComputedStyle(canvas)
            canvas.width = w = ~~s.width.split('px')[0]
            canvas.height = h = ~~s.height.split('px')[0]
            for (var i = 0; i < N_FLOWERS; i++) {
                flowers.push(new Flower)
            }
            context.strokeStyle = context.shadowColor = '#ffebbf'
            // context.shadowBlur = -3
            ani(0, context)
        })

    }, [])

    return (
        <>
            <canvas onClick={click} style={{ width: '100%', height: '400px', backgroundColor: '#00539d' }}
                ref={ref}
            >
            </canvas>
            <div>
            sssssssssssssssssssssssssssssssssssssssssss

            </div>

        </>
    )
}
