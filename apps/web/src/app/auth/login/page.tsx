import { OAuthButtons } from "@/components/oauth-buttons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Log In</CardTitle>
                        <CardDescription>Easily sign in with a provider</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <OAuthButtons />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}