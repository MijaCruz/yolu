let carrito = [];
        let total = 0;
        function agregarAlCarrito(nombre, precio, idTalla) {
            const talla = document.getElementById(idTalla).value;
            carrito.push({ nombre: nombre, precio: precio, talla: talla });
            total += precio;
            actualizarCarrito();
        }
        function actualizarCarrito() {
            const listaCarrito = document.getElementById('lista-carrito');
            const totalElement = document.getElementById('total');

            listaCarrito.innerHTML = '';
            carrito.forEach(producto => {
                const li = document.createElement('li');
                li.textContent = `${producto.nombre} - Talla: ${producto.talla} - S/.${producto.precio}`;
                listaCarrito.appendChild(li);
            });

            totalElement.textContent = total;
        }
        function comprar() {
            const nombrePersona = document.getElementById('nombre').value.trim();
            if (!nombrePersona) {
                alert("Por favor, ingrese su nombre antes de realizar la compra.");
            } else if (carrito.length === 0) {
                alert("No has comprado ningún producto.");
            } else {
                let productosComprados = `Nombre del comprador: ${nombrePersona}\n`;
                productosComprados += "Productos comprados:\n";
                carrito.forEach(producto => {
                    productosComprados += `-${producto.nombre} - Talla: ${producto.talla} - S/.${producto.precio}\n`;
                });
                productosComprados += `Total: S/. ${total} \n`;
                productosComprados += `Muchas gracias por su compra ${nombrePersona} :D`;
                alert(productosComprados);
            }
        }
        document.querySelectorAll('.modelo').forEach(modelo => {
            let currentIndex = 0;

            modelo.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.alt);
            });

            modelo.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            modelo.addEventListener('drop', (e) => {
                e.preventDefault();
                const imgAlt = e.dataTransfer.getData('text/plain');
                const images = modelo.getElementsByTagName('img');

                for (let i = 0; i < images.length; i++) {
                    if (images[i].alt === imgAlt) {
                        images[currentIndex].style.display = 'none';
                        currentIndex = (i + 1) % images.length;
                        images[currentIndex].style.display = 'inline-block';
                        break;
                    }
                }
            });
        });
        