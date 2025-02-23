<script>
    import { onNavigate } from "$app/navigation";
    onNavigate((to) => {
        if (!document.startViewTransition) return;
        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve()
                await to.complete
            });
        });
    });

</script>