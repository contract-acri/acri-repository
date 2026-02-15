export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const slug = url.pathname.substring(1)

    // If root domain accessed
    if (!slug) {
      return new Response("ACRI File Repository System Running 🚀", {
        status: 200
      })
    }

    // Get Drive link from KV
    const driveLink = await env.LINKS.get(slug)

    if (!driveLink) {
      return new Response("Document not found", {
        status: 404
      })
    }

    // Redirect to Google Drive
    return Response.redirect(driveLink, 302)
  }
}
