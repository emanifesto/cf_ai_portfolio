export const onRequestGet = async ({request, env}: {request: Request, env: {AI: any}}) => {
    const characterReference = await fetch('/headshot.jpg')
    const inputs = {
        'prompt': "Using character reference, create an image of a {job title} in {setting}. {artstyle} art-style.",
        'image': [new Uint8Array(await characterReference.arrayBuffer())],
        width: 960,
        height: 540,
    }

    const response = await env.AI.run(
        "@cf/runwayml/stable-diffusion-v1-5-img2img",
        inputs
    )

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
}