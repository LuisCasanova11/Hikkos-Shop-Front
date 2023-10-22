<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<br>
		<H3>Menu</H3>
		<div class="menu-toggle-wrap button">
			<font-awesome-icon class="menu-toggle" @click="ToggleMenu" icon="angles-right" style="color: #FFFCF9;" />
		</div>
		<div class="menu">
			<router-link to="/products" class="button">
				<font-awesome-icon class="material-icons" icon="tag" />
				<Button class="material-icons" disabled text label="Products" />
			</router-link>
			<router-link to="/users" class="button">
				<font-awesome-icon class="material-icons" icon="user" />
				<Button class="material-icons" disabled text label="Users" />
			</router-link>
			<router-link to="/categories" class="button">
				<font-awesome-icon class="material-icons" icon="layer-group" />
				<Button class="material-icons" disabled text label="Categories" />
			</router-link>
		</div>
	</aside>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button';

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;
	/* Added bluf effect */
	background: #F2D0B6;
	box-shadow: 0px 4px 24px -1px #00000025;
	width: calc(2rem + 27px);
	overflow: hidden;
	height: 90.9vh;
	padding: 1rem;
	transition: 0.2s ease-in-out;


	.flex {
		flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 1rem;

		img {
			width: 2rem;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;

			.material-icons {
				font-size: 1rem;
				transition: 0.2s ease-out;
			}

			&:hover {
				.material-icons {
					color: #FFFCF9;
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3,
	.button {
		font-size: 2rem;
	}

	h3,

	h3,
	.button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

	}

	/* Changed colors */

	h3 {
		color: #FFFCF9;
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 28px;
				color: #FFFCF9;
				transition: 0.2s ease-in-out;
			}

			.text {
				color: #FFFCF9;
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: #B94429;
				mix-blend-mode: soft-light;

				.material-icons,
				.text {
					color: #FFFCF9;
				}
			}

			&.router-link-exact-active {
				background-color: #B94429;
				backdrop-filter: blur(5px);
				-webkit-backdrop-filter: blur(5px);
				mix-blend-mode: soft-light;
				border-right: 5px solid #FFFCF9;
				;

				.material-icons,
				.text {
					color: #FFFCF9;
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;

			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3,
		.button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>