```javascript
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div>
      <a href="#" onClick={handleClick}>
        Home
      </a>
    </div>
  );
}

export default MyComponent; 
```