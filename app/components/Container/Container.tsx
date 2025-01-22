export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container py-2 px-2 mx-auto lg:max-w-7xl">{children}</div>
}
