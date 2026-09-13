router.get("/ping", ({ request }) => ({
  pong: Date.now(),
  hello: "from-lab",
}));

router.get("/echo/:msg", ({ params }) => ({ echo: params.msg }));

router.get("/health", ({ request }) => {
  return {
    status: "ok",
    service: "puter-lab-worker",
    deployed: true,
    time: Date.now(),
  };
});