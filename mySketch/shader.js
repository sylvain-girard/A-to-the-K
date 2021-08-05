function getShader(_renderer) {
  const vert = `
    attribute vec3 aPosition;
    attribute vec2 aTexCoord;

    varying vec2 vUV;

    void main() {
      vUV = aTexCoord;

      vec4 position = vec4(aPosition, 1.0);
      position.xy = position.xy * 2.0 - 1.0;
      gl_Position = position;
    }
  `;

  const frag = `
    precision highp float;

    varying vec2 vUV;

    uniform sampler2D tex;
    uniform float speed;
    uniform float frequency;
    uniform float amplitude;

    void main() {
      vec2 uv = vec2(1.0, 1.0) - vUV;
      uv.x = uv.x * -1.0;

      float sineWave = sin(uv.y * frequency + speed) * amplitude;
      vec2 distort = vec2(sineWave, sineWave);
      vec4 texColor = texture2D(tex, mod(uv - distort, 1.0));

      gl_FragColor = texColor;
    }
  `;
  
  return new p5.Shader(_renderer, vert, frag);
}
