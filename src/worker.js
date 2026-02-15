export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const slug = url.pathname.substring(1);

    if (!slug) {
      return new Response(
        "Ahmedabad Centre for Research & Innovation - Repository System Running",
        { status: 200 }
      );
    }

    const driveLink = await env.LINKS.get(slug);

    if (!driveLink) {
      return new Response("Document not found", { status: 404 });
    }

    return Response.redirect(driveLink, 302);
  }
};
