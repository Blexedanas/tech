import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Share2, Tag } from 'lucide-react'
import { blogPosts } from '@/lib/blogData'

// This function is required for static export (output: 'export')
// It pre-renders all slugs at build time.
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find(p => p.slug === params.slug)

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-navy px-4 text-center">
                <h1 className="text-4xl font-display font-black text-slate-900 mb-4">Post Not Found</h1>
                <p className="text-slate-600 mb-8 text-lg">The article you are looking for has been moved or doesn't exist.</p>
                <Link href="/blog" className="btn-primary">Back to Blog</Link>
            </div>
        )
    }

    return (
        <main className="bg-navy min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-16">
                <div className="container-custom max-w-4xl mx-auto">
                    {/* Back Link */}
                    <div className="mb-12">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-all text-xs font-black uppercase tracking-[0.2em] group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> 
                            Back to Insights
                        </Link>
                    </div>

                    <div className="flex items-center gap-3 text-primary text-xs font-black uppercase tracking-widest mb-6">
                        <Tag className="w-4 h-4" /> {post.category}
                    </div>
                    
                    <h1 className="font-display font-extrabold text-4xl md:text-6xl text-slate-900 leading-tight mb-8">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-slate-400 text-[10px] font-bold uppercase tracking-widest border-b border-slate-100 pb-12 mb-12">
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
                        <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
                    </div>

                    {/* Featured Image */}
                    <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden mb-16 shadow-2xl border border-slate-100">
                        <img 
                            src={post.image} 
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <article 
                        className="prose prose-slate prose-lg lg:prose-xl max-w-none 
                        prose-headings:font-display prose-headings:font-extrabold prose-headings:text-slate-900
                        prose-p:text-slate-600 prose-p:leading-relaxed
                        prose-strong:text-slate-900 prose-blockquote:border-primary
                        prose-blockquote:bg-slate-50 prose-blockquote:p-6 prose-blockquote:rounded-2xl
                        prose-blockquote:italic prose-blockquote:text-slate-700
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6"
                        dangerouslySetInnerHTML={{ __html: post.content || '' }}
                    />

                    {/* Footer Call to Action */}
                    <div className="mt-24 p-12 bg-white border border-slate-200 rounded-[3rem] text-center shadow-xl">
                        <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-4">Want to build something similar?</h3>
                        <p className="text-slate-600 mb-8 max-w-md mx-auto">Our experts are ready to turn your digital vision into a reality using the latest tech and design patterns.</p>
                        <Link href="/contact" className="btn-primary">Connect With Us</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
